import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UpcomingTalkComponent from 'src/components/UpcomingTalkComponent'
import PastTalkComponent from 'src/components/PastTalkComponent'

export default class TalkComponent extends Component {
  static propTypes = {
    talk: React.PropTypes.shape({
      id: React.PropTypes.string,
      number: React.PropTypes.number,
      name: React.PropTypes.string,
      date: React.PropTypes.string,
      status: React.PropTypes.string,
      meetupGuestList: React.PropTypes.shape({
        meetupID: React.PropTypes.string,
        rsvpLimit: React.PropTypes.number,
        waitlistCount: React.PropTypes.number,
        yesRsvpCount: React.PropTypes.number,
        remainingCount: React.PropTypes.number,
        link: React.PropTypes.string
      }),
      sponsor: React.PropTypes.shape({
        id: React.PropTypes.string,
        name: React.PropTypes.string,
        url: React.PropTypes.string,
        logoURL: React.PropTypes.string
      }),
      venue: React.PropTypes.shape({
        name: React.PropTypes.string,
        address: React.PropTypes.string,
        city: React.PropTypes.string
      })
    })
  }

  render() {
    const { talk } = this.props
    if (talk.status == 'upcoming') {
      return <UpcomingTalkComponent talk={talk} />
    }

    return <PastTalkComponent talk={talk} />
  }
}
