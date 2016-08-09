import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WrapperComponent from 'src/components/WrapperComponent'
import HeaderComponent from 'src/components/HeaderComponent'

export default class HeaderContainer extends Component {
  static propTypes = {
    currentCategory: PropTypes.string
  }

  render() {
    return (
      <WrapperComponent className={'HeaderContainer'}>
        <HeaderComponent {...this.props} />
      </WrapperComponent>
    )
  }
}
