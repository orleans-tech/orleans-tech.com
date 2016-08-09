import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Link from 'react-router/lib/Link'
import { prefixLink } from 'gatsby-helpers'
import { Icon } from 'react-fa'

import { getClassNameIfCurrent } from 'src/utils/category'

import WrapperComponent from 'src/components/WrapperComponent'

import orleansTechTaklsLogo from 'src/assets/img/orleanstech-logo-talks.png'
import orleansTechSummitLogo from 'src/assets/img/orleanstech-logo-summit.png'
import orleansTechBblLogo from 'src/assets/img/orleanstech-logo-bbl.png'
import orleansTechLogo from 'src/assets/img/orleanstech-logo.png'

import './HeaderComponent.scss'

const categoriesLogo = {
  default: orleansTechLogo,
  talks: orleansTechTaklsLogo,
  bbl: orleansTechBblLogo,
  summit: orleansTechSummitLogo,
  association: orleansTechLogo
}

const mainNav = [
  {
    href: '/',
    value: <Icon name="home" />,
    liClassName: 'mainNavDefault',
    isCurrentClassName: null
  },
  {
    href: '/talks/',
    value: 'Talks',
    liClassName: 'mainNavTalks',
    isCurrentClassName: 'talks'
  },
  /* { href: '/summit/', value: 'Summit', liClassName: 'mainNavSummit', isCurrentClassName: 'summit' }, */
  {
    href: '/bbl/',
    value: 'BBL',
    liClassName: 'mainNavBbl',
    isCurrentClassName: 'bbl'
  },
  {
    href: '/association/',
    value: "L'association",
    liClassName: 'mainNavOrga',
    isCurrentClassName: 'association'
  }
]

const subNavCategories = {
  default: [],
  talks: [
    { href: '/talks/', value: 'Les talks' },
    { href: '/talks/speakers/', value: 'Les speakers' },
    { href: '/talks/sponsors/', value: 'Nos sponsors' },
    { href: '/talks/contact/', value: 'Contact' }
  ],
  bbl: [
    { href: '/bbl/', value: "Qu'est-ce ?" },
    { href: '/bbl/speakers/', value: 'Les speakers' }
  ],
  summit: [],
  association: [
    { href: '/association/', value: 'Les adhérents' },
    { href: '/association/bureau/', value: 'Le bureau' },
    { href: '/association/sponsors/', value: 'Nos sponsors' }
  ]
}

export default class HeaderComponent extends Component {
  static propTypes = {
    currentCategory: PropTypes.string
  }

  render() {
    const currentLogo = categoriesLogo[this.props.currentCategory]
    const subNav = subNavCategories[this.props.currentCategory]

    return (
      <header className={'HeaderComponent'}>
        <Link to={prefixLink('/')} className={'title'}>
          <h1><img src={prefixLink(currentLogo)} alt={`Orléans Tech`} /></h1>
        </Link>
        <div className={'navigationContainer'}>
          <nav className={'mainNav'}>
            <ul className={'mainNavContainer'}>
              {mainNav.map(link => (
                <li key={link.value} className={link.liClassName}>
                  <Link
                    to={prefixLink(link.href)}
                    className={getClassNameIfCurrent(link.isCurrentClassName)}>
                    {link.value}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className={'secondaryNav'}>
            <ul>
              {subNav.map(link => (
                <li key={link.value}>
                  <Link to={prefixLink(link.href)} activeClassName={'active'}>
                    {link.value}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
