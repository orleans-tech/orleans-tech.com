import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class VenueTalkComponent extends Component {
  static propTypes = {
    venue: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string
    }),
    prefix: PropTypes.string
  }

  render() {
    const { venue, prefix } = this.props
    const address = `${venue.address}, ${venue.city}, France`
    return (
      <span className={'VenueTalkComponent'}>
        {prefix}
        <a
          className={'location'}
          href={`https://www.google.com/maps/?q=${encodeURIComponent(address)}`}
          target={'_blank'}>
          {venue.name}
        </a>
      </span>
    )
  }
}
