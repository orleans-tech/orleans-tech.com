import React, { Component } from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import PeopleContainer from 'src/containers/PeopleContainer'
import WrapperComponent from 'src/components/WrapperComponent'

export default class PageAssociationAdherents extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <WrapperComponent className={'PageAssociationAdherents'}>
          <div>
            <h2>{'Nos adhérents'}</h2>
            <PeopleContainer kind={'organization-member-2017'} />
          </div>
        </WrapperComponent>
      </DocumentTitle>
    )
  }
}
