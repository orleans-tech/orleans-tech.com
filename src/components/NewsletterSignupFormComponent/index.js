import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { _ } from 'src/utils/trans'
import { Icon } from 'react-fa'
import WrapperComponent from 'src/components/WrapperComponent'

import './NewsletterSignupFormComponent.scss'

const STATUS = {
  STANDBY: 'standby',
  PROCESSING: 'processing',
  REGISTERED: 'registered',
  FAILED: 'failed'
}

class NewsletterSignupFormComponent extends Component {
  static propTypes = {
    // Function executed when the use click on "submit"
    onFormSubmit: PropTypes.func,
    // Status
    //   - standby: Waiting the user to enter its email
    //   - processing: Request are on processing
    //   - registered: Registration succeed
    //   - failed: Registration failed
    status: PropTypes.oneOf([
      STATUS.STANDBY,
      STATUS.PROCESSING,
      STATUS.REGISTERED,
      STATUS.FAILED
    ]),
    // Message related to the status
    message: PropTypes.string
  }

  constructor(props) {
    super()
    this.state = { email: '' }
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  onFormSubmit(e) {
    e.preventDefault()
    this.props.onFormSubmit({
      email: this.state.email
    })
  }

  renderMessage() {
    return (
      <span className={`message ${this.props.status}`}>
        {this.props.message}
      </span>
    )
  }

  renderForm() {
    let message = null
    if (STATUS.FAILED == this.props.status) {
      message = this.renderMessage()
    }

    let submitMessage = <Icon name="arrow-circle-right" />
    if (STATUS.PROCESSING == this.props.status) {
      submitMessage = <Icon name="circle-o-notch" spin />
    }

    return (
      <div>
        <form ref={'f'} onSubmit={this.onFormSubmit.bind(this)}>
          <input
            type={'type'}
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
          />
          <button type={'submit'}>{submitMessage}</button>
        </form>
        <span>{message}</span>
      </div>
    )
  }

  render() {
    var content = this.props.status == STATUS.REGISTERED
      ? this.renderMessage()
      : this.renderForm()
    return (
      <WrapperComponent
        type={'section'}
        className={'NewsletterSignupFormComponent'}>
        <p>
          <span className={'headline'}>{`Inscrirez-vous à la newsletter`}</span>
          <span
            className={
              'desc'
            }>{`Et recevez les communications sur nos différents évènements (talk, conf, bbl).`}</span>
        </p>
        {content}
      </WrapperComponent>
    )
  }
}

NewsletterSignupFormComponent.STATUS = STATUS

export default NewsletterSignupFormComponent
