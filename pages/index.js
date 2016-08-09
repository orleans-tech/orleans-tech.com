import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import NextMeetupContainer from 'containers/NextMeetupContainer'
import NewsletterSignupContainer from 'containers/NewsletterSignupContainer'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <NextMeetupContainer />
          <NewsletterSignupContainer />
        </div>
      </DocumentTitle>
    )
  }
}

// Inscription à la mailing list
