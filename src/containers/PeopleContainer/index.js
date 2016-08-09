import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import PersonComponent from 'src/components/PersonComponent'
import WrapperComponent from 'src/components/WrapperComponent'
import SpinnerComponent from 'src/components/SpinnerComponent'
import { peopleQuery } from 'src/graphql'

import './PeopleContainer.scss'

class PeopleContainer extends Component {
  static propTypes = {
    kind: PropTypes.oneOf([
      'talk',
      'bbl',
      'organization-member',
      'organization-admin',
      'organization-member-2017'
    ])
  }

  render() {
    const { data: { loading, error, people } } = this.props

    if (error) {
      return <div className={'PeopleContainer'}>Error ...</div>
    }

    if (loading) {
      return <div className={'PeopleContainer'}><SpinnerComponent /></div>
    }

    if (!people || !people.edges) {
      return <div className={'PeopleContainer'} />
    }

    return (
      <WrapperComponent className={'PeopleContainer'}>
        {people.edges.map(edge => {
          const person = edge.node
          return <PersonComponent key={person.id} person={person} />
        })}
      </WrapperComponent>
    )
  }
}

export default graphql(peopleQuery, {
  options: ({ kind }) => ({
    variables: {
      first: 100,
      orderField: 'lastname',
      order: 1,
      kind: kind
    }
  })
})(PeopleContainer)
