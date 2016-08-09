import React, { Component } from 'react'
import update from 'react-addons-update'
import { _ } from 'src/utils/trans'
import config from 'src/utils/config'

import NewsletterSignupFormComponent
  from 'src/components/NewsletterSignupFormComponent'

export default class NewsletterInput extends Component {
  constructor() {
    super()
    this.state = {
      status: NewsletterSignupFormComponent.STATUS.STANDBY,
      message: null
    }
  }

  onFormSubmit(formData) {
    this.setState(
      update(this.state, {
        status: { $set: NewsletterSignupFormComponent.STATUS.PROCESSING },
        message: { $set: null }
      })
    )

    fetch(`${config.get('api_url')}/v1/newsletter/members`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email
      })
    })
      .then(res => {
        if (!res.ok && res.status != 400) {
          throw new Exception()
        }
        return res.json()
      })
      .then(payload => {
        if (payload.errors) {
          return this.setState(
            update(this.state, {
              status: { $set: NewsletterSignupFormComponent.STATUS.FAILED },
              message: { $set: payload.errors[0].message }
            })
          )
        }

        this.setState(
          update(this.state, {
            status: { $set: NewsletterSignupFormComponent.STATUS.REGISTERED },
            message: { $set: _('newsletter_signup.registration_message') }
          })
        )
      })
      .catch(err => {
        this.setState(
          update(this.state, {
            status: { $set: NewsletterSignupFormComponent.STATUS.FAILED },
            message: { $set: _('generic_error') }
          })
        )
      })
  }

  render() {
    return (
      <NewsletterSignupFormComponent
        onFormSubmit={this.onFormSubmit.bind(this)}
        status={this.state.status}
        message={this.state.message}
      />
    )
  }
}
