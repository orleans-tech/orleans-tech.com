import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import WrapperComponent from 'src/components/WrapperComponent'
import UpcomingTalkComponent from 'src/components/UpcomingTalkComponent'
import SpinnerComponent from 'src/components/SpinnerComponent'
import { talksQuery } from 'src/graphql'

import './NextTalkContainer.scss'

class NextTalkContainer extends Component {
  render() {
    const { data: { loading, error, talks } } = this.props

    if (error) {
      return <div className={'NextTalkContainer'}>Error ...</div>
    }

    if (loading) {
      // Loading ...
      return <div className={'NextTalkContainer'}><SpinnerComponent /></div>
    }

    if (!talks || !talks.edges || talks.edges.length <= 0) {
      return (
        <WrapperComponent className={'NextTalkContainer noTalks'}>
          Vous souhaitez présenter un sujet technique ? Sponsoriser un talk ?
          <br />
          N'hésitez pas à nous {' '}
          <Link to={prefixLink('/talks/contact/')}>contacter</Link>
        </WrapperComponent>
      )
    }

    return (
      <WrapperComponent className={'NextTalkContainer'} type={'section'}>
        <UpcomingTalkComponent talk={talks.edges[0].node} />
      </WrapperComponent>
    )
  }
}

export default graphql(talksQuery, {
  options: props => ({
    variables: {
      first: 1,
      orderField: 'date',
      order: 1,
      status: 'upcoming'
    }
  })
})(NextTalkContainer)
