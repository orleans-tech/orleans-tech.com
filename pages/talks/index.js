import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import TalksContainer from 'src/containers/TalksContainer'

export default class TalksPage extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <TalksContainer />
      </DocumentTitle>
    )
  }
}
