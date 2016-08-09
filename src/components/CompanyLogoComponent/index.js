import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { getPhotoByType } from 'src/utils'

import './CompanyLogoComponent.scss'

export default class CompanyLogoComponent extends Component {
  static propTypes = {
    company: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
      originalSize: PropTypes.shape({
        kind: PropTypes.string,
        url: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number
      })
    })
  }

  render() {
    const { company: { name, logo } } = this.props

    if (!logo || !logo.originalSize || !logo.originalSize.url) {
      return null
    }

    return (
      <a
        href={this.props.company.url}
        target="_blank"
        className={`CompanyLogoComponent ${_.snakeCase(name)}`}>
        <img src={logo.originalSize.url} alt={logo.originalSize.title} />
      </a>
    )
  }
}
