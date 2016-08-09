import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { _ } from 'src/utils/trans'
import VenueTalkComponent from 'src/components/VenueTalkComponent'
import SponsorTalkComponent from 'src/components/SponsorTalkComponent'

moment.locale('fr')

import 'src/components/TalkComponent/TalkComponent.scss'
import './PastTalkComponent.scss'

export default class PastTalkComponent extends Component {
  static propTypes = {
    talk: PropTypes.shape({
      id: PropTypes.string,
      number: PropTypes.number,
      name: PropTypes.string,
      date: PropTypes.string,
      status: PropTypes.string,
      meetupGuestList: PropTypes.shape({
        meetupID: PropTypes.string,
        rsvpLimit: PropTypes.number,
        waitlistCount: PropTypes.number,
        yesRsvpCount: PropTypes.number,
        remainingCount: PropTypes.number,
        link: PropTypes.string
      }),
      sponsor: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        logoURL: PropTypes.string
      }),
      venue: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string
      })
    })
  }

  render() {
    const talk = this.props.talk
    const datetime = moment(talk.date).format('YYYY-MM-DD HH:mm')
    const datestr = moment(talk.date).format('dddd D MMMM YYYY')
    const venue = this.props.talk.venue

    let venueNamePrefix = ' à '
    if (venue.name == `Le LAB'O`) {
      venueNamePrefix = ' au '
    }

    let sponsor = null
    if (talk.sponsor) {
      sponsor = <SponsorTalkComponent sponsor={talk.sponsor} />
    }

    return (
      <section className={'TalkComponent PastTalkComponent'}>
        <span className={'number'}>{talk.number}</span>
        <span className={'headline'}>
          {`C'était le `}
          <time dateTime={datetime}>{datestr}</time>
          <VenueTalkComponent venue={talk.venue} prefix={venueNamePrefix} />
        </span>
        {sponsor}
        <h3 className={'title'}>{talk.name}</h3>
        <span className={'slotContainer'}>
          <span className={'messageContainer'}>
            <span className={'slot'}>{talk.meetupGuestList.yesRsvpCount}</span>
            {' personnes étaient présentes'}
          </span>
          <a
            className={'meetupLink'}
            href={talk.meetupGuestList.link}
            target={'blank'}>
            {'En savoir plus sur meetup.com'}
          </a>
        </span>
      </section>
    )
  }
}
