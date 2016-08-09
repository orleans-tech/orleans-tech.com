import React from 'react'
import moment from 'moment'

moment.locale('fr')

const SlotLeft = function({ slotLeft, slotLimit, slotWaitlist, meetupLink }) {
  if (slotLeft > 0) {
    return (
      <span className={'slotContainer'}>
        <span className={'slotLeft'}>{slotLeft}</span>{' place(s) restante(s) sur '}<span>{slotLimit}</span>
        <a href={meetupLink} target={'blank'}>{'Réserver ma place sur meetup.com'}</a>
      </span>
    )
  }

  let waitlistMessage
  if (slotWaitlist != 0) {
    waitlistMessage = <span>{'Déjà '}<span className={'slotWaitlist'}>{slotWaitlist}</span>{' personne(s) sur la liste d\'attente'}</span>
  }

  return (
    <span className={'slotContainer'}>
      {waitlistMessage}
      <a href={meetupLink} target={'blank'}>{'M\'inscrire sur la liste d\'attente'}</a>
    </span>
  )
}

export default class NextMeetupComponent extends React.Component {
  render () {
    const meetup = this.props.data
    const datetime = moment(meetup.date).format("YYYY-MM-DD HH:mm")
    const datestr = moment(meetup.date).format("dddd D MMMM YYYY à HH:mm")
    return (
      <section>
        <span className={'headline'}>Prochain meetup prévu le <time dateTime={datetime}>{datestr}</time></span>
        <h3>{meetup.name}</h3>
        <SlotLeft
          slotLeft={meetup.remaining_count}
          slotLimit={meetup.rsvp_limit}
          slotWaitlist={meetup.waitlist_count}
          meetupLink={meetup.meetup_link} />
      </section>
    )
  }
}
