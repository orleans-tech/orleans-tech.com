import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import exampleReducer from 'src/reducers/example'
import { GRAPHQL_API_BASE_URL } from 'src/config'

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  IntrospectionFragmentMatcher
} from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: `${GRAPHQL_API_BASE_URL}/`
})

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ODdjNmUwMTUyODI1YTAwMWY5ZjIxYjAiLCJyb2xlIjpbImFkbWluIl0sImV4cCI6MTQ5NTc3NjQ2MywiaWF0IjoxNDk1MTcxNjYzfQ.2RwVORaIwLmpkxfPbzdvbUyK-Jytl4tMLDNAv-Y632s'

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {} // Create the header object if needed.
      }

      //req.options.headers.authorization = token ? `Bearer ${token}` : null
      next()
    }
  }
])

const client = new ApolloClient({
  networkInterface: networkInterface
})

const store = createStore(
  combineReducers({
    exampleReducer: exampleReducer,
    apollo: client.reducer()
  }),
  // initial state
  {},
  compose(
    applyMiddleware(client.middleware()),
    // If you are using the devToolsExtension, you can add it here also
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

// This gets returned to Gatsby which then renders the Root component as normal.
exports.wrapRootComponent = Root => {
  return () => (
    <ApolloProvider client={client} store={store}>
      <Root />
    </ApolloProvider>
  )
}

exports.onRouteUpdate = function(state, page, pages) {}
