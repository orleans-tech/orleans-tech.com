'use strict'

import React from 'react'
import { _ } from 'utils/trans'
import { Icon } from 'react-fa'

class NewsletterSignupForm extends React.Component {

  constructor(props) {
    super()
    this.state = { email: '' }
  }

  handleChange(event) {
    this.setState({email: event.target.value})
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

  render() {
    if (this.props.status == NewsletterSignupForm.STATUS.REGISTERED) {
      return <span>{_('newsletter_signup.registration_message')}</span>
    }

    let message = null
    if (this.props.status == NewsletterSignupForm.STATUS.STANDBY) {
      message = this.renderMessage()
    }

    let submitMessage = _('newsletter_signup.cta')
    if (this.props.status == NewsletterSignupForm.STATUS.PROCESSING) {
      submitMessage = <Icon name="circle-o-notch" spin />
    }

    return (
      <form ref={'f'} onSubmit={this.onFormSubmit.bind(this)}>
        {message}
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange.bind(this)}
        />
        <button type={'submit'}>{submitMessage}</button>
      </form>
    )
  }

  static get STATUS() {
    return {
      STANDBY: 'standby',
      PROCESSING: 'processing',
      REGISTERED: 'registered',
      FAILED: 'failed'
    }
  }
}

NewsletterSignupForm.propTypes = {
  // Function executed when the use click on "submit"
  onFormSubmit: React.PropTypes.func,
  // Status
  //   - standby: Waiting the user to enter its email
  //   - processing: Request are on processing
  //   - registered: Registration succeed
  //   - failed: Registration failed
  status: React.PropTypes.oneOf([
    NewsletterSignupForm.STATUS.STANDBY,
    NewsletterSignupForm.STATUS.PROCESSING,
    NewsletterSignupForm.STATUS.REGISTERED,
    NewsletterSignupForm.STATUS.FAILED
  ]),
  // Message related to the status
  message: React.PropTypes.string,
}

export default NewsletterSignupForm
