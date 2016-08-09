import React, { Component } from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'
import { _ } from 'src/utils/trans'
import VenueTalkComponent from 'src/components/VenueTalkComponent'
import SponsorTalkComponent from 'src/components/SponsorTalkComponent'

moment.locale('fr')

import 'src/components/TalkComponent/TalkComponent.scss'
import './UpcomingTalkComponent.scss'

class SlotLeftTalkComponent extends Component {
  static propTypes = {
    slotLeft: React.PropTypes.number,
    slotLimit: React.PropTypes.number,
    slotWaitlist: React.PropTypes.number,
    meetupLink: React.PropTypes.string
  }

  render() {
    const { slotLeft, slotLimit, slotWaitlist, meetupLink } = this.props

    if (slotLeft > 0) {
      return (
        <span className={'slotContainer'}>
          <span className={'messageContainer'}>
            <span className={'slot slotLeft'}>{slotLeft}</span>
            {' place(s) restante(s) sur '}
            <span className={'slot slotLimit'}>{slotLimit}</span>
          </span>
          <a className={'meetupLink'} href={meetupLink} target={'blank'}>
            {'Réserver ma place sur meetup.com'}
          </a>
        </span>
      )
    }

    let waitlistMessage
    if (slotWaitlist != 0) {
      waitlistMessage = (
        <span className={'messageContainer'}>
          {'Déjà '}
          <span className={'slot slotWaitlist'}>{slotWaitlist}</span>
          {" personne(s) sur la liste d'attente"}
        </span>
      )
    }

    return (
      <span className={'slotContainer'}>
        {waitlistMessage}
        <a className={'meetupLink'} href={meetupLink} target={'blank'}>
          {"M'inscrire sur la liste d'attente"}
        </a>
      </span>
    )
  }
}

export default class UpcomingTalkComponent extends Component {
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
    const talk = this.props.talk
    const datetime = moment(talk.date).format('YYYY-MM-DD HH:mm')
    const datestr = moment(talk.date).format('dddd D MMMM YYYY à HH:mm')
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
      <section className={'TalkComponent UpcomingTalkComponent'}>
        <span className={'number'}>{talk.number}</span>
        <span className={'headline'}>
          {'Prévu le '}
          <time dateTime={datetime}>{datestr}</time>
          <VenueTalkComponent venue={talk.venue} prefix={venueNamePrefix} />
        </span>
        {sponsor}
        <h3 className={'title'}>{talk.name}</h3>
        <SlotLeftTalkComponent
          slotLeft={talk.meetupGuestList.remainingCount}
          slotLimit={talk.meetupGuestList.rsvpLimit}
          slotWaitlist={talk.meetupGuestList.waitlistCount}
          meetupLink={talk.meetupGuestList.link}
        />
      </section>
    )
  }
}
