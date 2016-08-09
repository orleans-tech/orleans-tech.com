import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class WrapperComponent extends Component {
  static propTypes = {
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.any
  }

  static defaultProps = {
    type: 'div'
  }

  render() {
    const className = this.props.className ? this.props.className : ''
    const wrapperClassName = this.props.wrapperClassName
      ? this.props.wrapperClassName
      : ''
    return React.createElement(this.props.type, {
      className: `${className}`,
      children: (
        <div className={`wrapper ${wrapperClassName}`}>
          {this.props.children}
        </div>
      )
    })
  }
}
