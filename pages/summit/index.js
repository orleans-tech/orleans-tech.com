import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import WrapperComponent from 'src/components/WrapperComponent'

export default class PageSummit extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <WrapperComponent className={'PageSummit'}>
          <h2>{'conférence'}</h2>
        </WrapperComponent>
      </DocumentTitle>
    )
  }
}
