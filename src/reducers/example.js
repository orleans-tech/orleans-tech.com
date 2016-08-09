export default function exampleReducer(state = null, action) {
  switch (action.type) {
    case 'LOAD_SERVICES_PAGES':
      return action.servicesPages
    default:
      return state
  }
}
