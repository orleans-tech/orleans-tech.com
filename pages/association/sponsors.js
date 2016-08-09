import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import SponsorsContainer from 'src/containers/SponsorsContainer'
import WrapperComponent from 'src/components/WrapperComponent'

export default class PageAssociationSponsors extends Component {
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <WrapperComponent className={'PageAssociationSponsors'}>
          <div>
            <h2>{'Nos sponsors'}</h2>
            <SponsorsContainer kind={'association-2017'} />
          </div>
        </WrapperComponent>
      </DocumentTitle>
    )
  }
}
