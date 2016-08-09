import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import SponsorsContainer from 'src/containers/SponsorsContainer'
import WrapperComponent from 'src/components/WrapperComponent'

import 'src/css/pages/TalksSponsors.scss'

export default class PageTalksSponsors extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <WrapperComponent className={'PageTalksSponsors'}>
          <h2>Ils ont sponsorisés nos meetups</h2>
          <p>
            Afin de pouvoir proposer des pizzas/boissons aux participants de nos
            talks. Nous avons ouvert le sponsoring de nos meetups, il consiste
            simplement au paiement du repas. En échange, cela permet aux
            entreprises de se faire connaitre auprès de nos participants, un
            public particulierement averti de l'univers tech.<br />
            Si vous aussi vous souhaitez faire connaitre votre entreprise auprès
            de passionnés tech, n'hésitez pas à <a
              href={'mailto: contact@orleans-tech.com'}>
              nous contacter par email
            </a> (par{' '}
            <a href={'https://twitter.com/orleans_tech'}>twitter</a>,{' '}
            <a href={'https://www.facebook.com/orleanstech/'}>facebook</a>).
          </p>
          <SponsorsContainer kind={'talk'} />
        </WrapperComponent>
      </DocumentTitle>
    )
  }
}
