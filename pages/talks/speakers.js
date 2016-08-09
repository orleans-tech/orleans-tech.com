import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import PeopleContainer from 'src/containers/PeopleContainer'
import WrapperComponent from 'src/components/WrapperComponent'

export default class PageTalksSpeakers extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <WrapperComponent className={'PageTalksSpeakers'}>
          <PeopleContainer kind={'talk'} />
        </WrapperComponent>
      </DocumentTitle>
    )
  }
}
