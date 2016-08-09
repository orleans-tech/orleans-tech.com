import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import NextTalkContainer from 'src/containers/NextTalkContainer'
import NewsletterSignupContainer from 'src/containers/NewsletterSignupContainer'
import WrapperComponent from 'src/components/WrapperComponent'
import HomepageAlbumContainer from 'src/containers/HomepageAlbumContainer'
import SponsorsContainer from 'src/containers/SponsorsContainer'

import 'src/css/pages/Index.scss'

export default class Index extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <NextTalkContainer />
          <NewsletterSignupContainer />
          <HomepageAlbumContainer />
          <WrapperComponent className={'HomeSponsorsContainer'}>
            <span className={'headline'}>{`Nos sponsors`}</span>
            <span className={'desc'}>
              {
                "Ils nous accompagnent tout au long de l'année, rendant possible l'organisation de nos nombreux événements."
              }
            </span>
            <SponsorsContainer kind={'association-2017'} />
          </WrapperComponent>
        </div>
      </DocumentTitle>
    )
  }
}
