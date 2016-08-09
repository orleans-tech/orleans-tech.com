import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'

import { prefixLink } from 'gatsby-helpers'
import config from 'src/utils/config'
import { getPhotoByType } from 'src/utils'

import defaultImg from 'src/assets/img/person-default.jpg'

import './PersonComponent.scss'

export default class PersonComponent extends React.Component {
  static propTypes = {
    person: PropTypes.shape({
      id: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      title: PropTypes.string,
      photo: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        originalSize: PropTypes.shape({
          kind: PropTypes.string,
          url: PropTypes.string,
          width: PropTypes.number,
          height: PropTypes.number
        }),
        sizes: PropTypes.arrayOf(
          PropTypes.shape({
            kind: PropTypes.string,
            url: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number
          })
        )
      }),
      externalDetails: PropTypes.shape({
        twitter: PropTypes.string,
        websiteURL: PropTypes.string,
        github: PropTypes.string
      })
    })
  }

  render() {
    const person = this.props.person
    const name = person.firstname + ' ' + person.lastname

    let photoUrl = null
    let photoTitle = null
    if (person.photo) {
      let size = getPhotoByType(person.photo.sizes, '500')
      photoUrl = size ? size.url : null
      photoTitle = person.photo.title

      if (!photoUrl) {
        photoUrl = person.photo.originalSize
          ? person.photo.originalSize.url
          : null
      }
    }

    photoUrl = photoUrl ? photoUrl : defaultImg
    photoTitle = photoTitle ? photoTitle : name

    const externalDetails = person.externalDetails ? person.externalDetails : {}

    let twitterLink = null
    if (externalDetails.twitter) {
      twitterLink = (
        <a
          href={`https://twitter.com/${externalDetails.twitter}`}
          target={'_blank'}>
          <Icon name={'twitter'} />
        </a>
      )
    }

    let githubLink = null
    if (externalDetails.github) {
      githubLink = (
        <a
          href={`https://github.com/${externalDetails.github}`}
          target={'_blank'}>
          <Icon name={'github'} />
        </a>
      )
    }

    let websiteLink = null
    if (externalDetails.websiteURL) {
      websiteLink = (
        <a href={externalDetails.websiteURL} target={'_blank'}>
          <Icon name={'home'} />
        </a>
      )
    }

    return (
      <div className={'PersonComponent'}>
        <img className={'photo'} src={photoUrl} alt={photoTitle} />
        <h3 className={'name'}>{name}</h3>
        <span className={'links'}>{twitterLink}{githubLink}{websiteLink}</span>
      </div>
    )
  }
}
