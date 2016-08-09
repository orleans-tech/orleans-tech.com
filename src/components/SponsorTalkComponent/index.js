import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './SponsorTalkComponent.scss'

export default class SponsorTalkComponent extends Component {
  static propTypes = {
    sponsor: React.PropTypes.shape({
      id: React.PropTypes.string,
      name: React.PropTypes.string,
      url: React.PropTypes.string,
      logoURL: React.PropTypes.string
    })
  }

  render() {
    const { sponsor } = this.props
    let name = sponsor.name
    if (sponsor.url) {
      name = <a href={sponsor.url}>{name}</a>
    }

    return (
      <span className={'SponsorTalkComponent'}>
        {`Sponsorisé par `}{name}
      </span>
    )
  }
}
