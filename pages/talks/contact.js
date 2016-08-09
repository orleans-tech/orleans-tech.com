import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import WrapperComponent from 'src/components/WrapperComponent'

export default class Contact extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <WrapperComponent className={'PageContact'}>
          <h2>{'contact'}</h2>
          <ul>
            <li>Stan <i>(Président) à stan [at] orleans-tech.com</i></li>
            <li>Aldo <i>(Trésorier) à aldo [at] orleans-tech.com</i></li>
            <li>
              Mélissa <i>(Secretaire) à melissa [at] orleans-tech.com</i>
            </li>
          </ul>
        </WrapperComponent>
      </DocumentTitle>
    )
  }
}
