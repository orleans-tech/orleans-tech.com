import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import { rhythm } from 'utils/typography'

import orleansTechLogo from '../assets/img/orleans-tech.svg'

import 'css/template.less'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <header id={'header'}>
          <nav className={'mainNav'}>
            <ul>
              <li className={'mainNavMeetup'}><Link to={prefixLink('/')}>Meetup</Link></li>
              <li className={'mainNavConf'}><Link to={prefixLink('/conf/')}>Conférence</Link></li>
              <li className={'mainNavBbl'}><Link to={prefixLink('/bbl/')}>BBL</Link></li>
              <li className={'mainNavOrganization'}><Link to={prefixLink('/association/')}>L'association</Link></li>
            </ul>
          </nav>
          <Link to={prefixLink('/meetup/speakers/')} className={"title"}>
            <h1>{'Orléans Tech'}</h1>
          </Link>
          <nav className={'secondaryNav'}>
            <ul>
              <li><Link to={prefixLink('/meetup/speakers/')}>Les speakers</Link></li>
              <li><Link to={prefixLink('/meetup/sponsors/')}>Nos sponsors</Link></li>
              <li><Link to={prefixLink('/contact/')}>Contact</Link></li>
            </ul>
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  },
})
