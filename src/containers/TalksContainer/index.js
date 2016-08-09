import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import update from 'react-addons-update'
import _ from 'lodash'
import TalkComponent from 'src/components/TalkComponent'
import WrapperComponent from 'src/components/WrapperComponent'
import SpinnerComponent from 'src/components/SpinnerComponent'
import config from 'src/utils/config'
import { talksQuery } from 'src/graphql'

import './TalksContainer.scss'

class TalksContainer extends Component {
  render() {
    const { data: { loading, error, talks } } = this.props

    if (error) {
      return <div className={'TalksContainer'}>Error ...</div>
    }

    if (loading) {
      // Loading ...
      return <div className={'TalksContainer'}><SpinnerComponent /></div>
    }

    if (!talks || !talks.edges) {
      return <div className={'TalksContainer'} />
    }

    let iMeetup = 1
    return (
      <div className={'TalksContainer'}>
        {talks.edges.map(edge => {
          const talk = edge.node
          const className = `${_.capitalize(talk.status)}TalkContainer`
          const separator = talks.edges.length > iMeetup
            ? <hr className={'separator'} />
            : null
          iMeetup++
          return (
            <WrapperComponent className={className} key={talk.id}>
              <TalkComponent talk={talk} />
              {separator}
            </WrapperComponent>
          )
        })}
      </div>
    )
  }
}

export default graphql(talksQuery, {
  options: props => ({
    variables: {
      first: 100,
      orderField: 'date',
      order: -1,
      status: 'all'
    }
  })
})(TalksContainer)
