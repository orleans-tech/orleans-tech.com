import React, { Component } from 'react'
import WrapperComponent from 'src/components/WrapperComponent'
import FooterComponent from 'src/components/FooterComponent'

import './FooterContainer.scss'

class FooterContainer extends Component {
  render() {
    return (
      <WrapperComponent className={'FooterContainer'}>
        <FooterComponent {...this.props} />
      </WrapperComponent>
    )
  }
}

export default FooterContainer
