import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import update from 'react-addons-update'
import _ from 'lodash'

import CompanyLogoComponent from 'src/components/CompanyLogoComponent'
import SpinnerComponent from 'src/components/SpinnerComponent'
import { companiesQuery } from 'src/graphql'

import './SponsorsContainer.scss'

class SponsorsContainer extends Component {
  static propTypes = {
    kind: React.PropTypes.oneOf([
      'association-2016',
      'association-2017',
      'talk'
    ])
  }

  render() {
    const { data: { loading, error, companies } } = this.props

    if (error) {
      return <div className={'SponsorsContainer'}>{'Error ...'}</div>
    }

    if (loading) {
      // Loading ...
      return <div className={'SponsorsContainer'}><SpinnerComponent /></div>
    }

    if (!companies || !companies.edges) {
      return <div className={'SponsorsContainer'}>Empty ...</div>
    }

    return (
      <div className={'SponsorsContainer'}>
        {companies.edges.map(edge => {
          const sponsor = edge.node
          return <CompanyLogoComponent key={sponsor.id} company={sponsor} />
        })}
      </div>
    )
  }
}

export default graphql(companiesQuery, {
  options: ({ kind }) => ({
    variables: {
      first: 100,
      orderField: 'name',
      order: 1,
      kind: kind
    }
  })
})(SponsorsContainer)
