import React from 'react'
import NextMeetupComponent from 'components/NextMeetupComponent'
import update from 'react-addons-update'

export default class NextMeetupContainer extends React.Component {
  constructor () {
    super()
    this.state = { loaded: false, error: false, data: null }
  }

  componentDidMount() {
    console.log('FETCH GRAPH API')
    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          {
            nextMeetup {
              id name status date rsvp_limit remaining_count waitlist_count
            }
          }
        `,
        variables: null,
        operationName: null
      })
    })
    .then(res => {
      if (!res.ok) {
        throw new Exception()
      }
      return res.json()
    })
    .then((payload) => {
      this.setState(update(this.state, {
        loaded: { $set: true },
        data: { $set: payload.data.nextMeetup },
      }))
    })
    .catch((err) => {
      this.setState(update(this.state, {
        loaded: { $set: false },
        error: { $set: true },
        data: { $set: null },
      }))
    })
  }

  render () {
    if (!this.state.loaded) {
      return <div>{'not loaded'}</div>
    }

    return <NextMeetupComponent data={this.state.data} />
  }
}
