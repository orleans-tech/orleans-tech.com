import React from 'react'
import _ from 'lodash'
import Link from 'react-router/lib/Link'
import { prefixLink } from 'gatsby-helpers'
import { Icon } from 'react-fa'

import './FooterComponent.scss'

class FooterComponent extends React.Component {
  render() {
    return (
      <footer className={'FooterComponent'}>
        <p>
          <b>Orléans Tech</b> est une association de lois 1901. Déclarée à
          Orléans le 01/08/2015.
        </p>
        <p>
          Photos par
          {' '}
          <a href={'http://mrossignol.fr/'} target={'_blank'}>
            Maxime Rossignol
          </a>
          ,
          Logos réalisés par Joan Penhoud.
        </p>
        <p>
          fait avec ❤ à
          {' '}
          <a href={'http://www.orleans-agglo.fr'} target={'_blank'}>Orléans</a>
        </p>
      </footer>
    )
  }
}

export default FooterComponent
