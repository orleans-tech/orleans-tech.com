import React from 'react'
import NewsletterSignupForm from 'components/NewsletterSignupForm'
import update from 'react-addons-update'

export default class NewsletterInput extends React.Component {
  constructor() {
    super()
    this.state = {
      status: NewsletterSignupForm.STATUS.STANDBY,
      message: null
    }
  }

  onFormSubmit(formData) {
    console.log('HANDLE SUBMIT')
    console.log(formData)

    this.setState(update(this.state, {
      status: { $set: NewsletterSignupForm.STATUS.PROCESSING },
      message: { $set: null }
    }))

    fetch('http://localhost:3000/v1/newsletter/members', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email
      })
    })
    .then(res => {
      console.log('LOL')
      console.log(res)
      if (!res.ok && res.status != 400) {
        throw new Exception()
      }
      return res.json()
    })
    .then((payload) => {

      if (payload.errors) {
        return this.setState(update(this.state, {
          status: { $set: NewsletterSignupForm.STATUS.FAILED },
          message: { $set: payload.errors[0].message }
        }))
      }

      this.setState(update(this.state, {
        status: { $set: NewsletterSignupForm.STATUS.REGISTERED },
        message: { $set: 'Votre email a bien été enregistrée' }
      }))
    })
    .catch((err) => {
      console.log('ERRROROOROROR')
      this.setState(update(this.state, {
        status: { $set: NewsletterSignupForm.STATUS.FAILED },
        message: { $set: 'Une erreur est survenue, veuillez réessayer ultérieurement.' },
      }))
    })
  }
  

  render() {
    return (
      <NewsletterSignupForm
        onFormSubmit={this.onFormSubmit.bind(this)}
        status={this.state.status}
        message={this.state.message} />
    )
  }
}
