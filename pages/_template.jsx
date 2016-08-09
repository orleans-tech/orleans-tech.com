import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Link from 'react-router/lib/Link'
import { getCurrentCategory } from 'src/utils/category'
import HeaderContainer from 'src/containers/HeaderContainer'
import FooterContainer from 'src/containers/FooterContainer'

import 'src/css/template.scss'

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const currentCategory = getCurrentCategory()
    return (
      <div className={`category${_.capitalize(currentCategory)}`}>
        <HeaderContainer currentCategory={currentCategory} />
        {this.props.children}
        <FooterContainer />
      </div>
    )
  }
}
