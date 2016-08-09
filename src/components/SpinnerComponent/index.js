import React, { Component } from 'react'

import spinner from 'src/assets/img/spinner.svg'
import './SpinnerComponent.scss'

export default class SpinnerComponent extends Component {
  render() {
    return (
      <div className={'SpinnerComponent'}>
        <img src={spinner} />
      </div>
    )
  }
}
