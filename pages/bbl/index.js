import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import WrapperComponent from 'src/components/WrapperComponent'

export default class PageBbl extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <WrapperComponent className={'PageBbl'}>
          <h2>Qu'est-ce qu'un BBL ?</h2>
          <p>
            Un Brown Bag Lunch c’est une présentation technique à l’heure du
            déjeuner. Le brown bag fait en effet référence à ce sac en carton
            marron que l’on utilise pour transporter son déjeuner sur son lieu
            de travail. L’idée est donc simple : une personne vient faire une
            présentation, pendant que l’assistance l’écoute en dégustant un bon
            sandwich (ça marche aussi avec une salade, d’ailleurs). On joint
            ainsi l’utile à l’agréable.
          </p>
        </WrapperComponent>
      </DocumentTitle>
    )
  }
}
