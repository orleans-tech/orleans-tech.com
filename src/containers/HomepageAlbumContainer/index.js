import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import WrapperComponent from 'src/components/WrapperComponent'
import AlbumComponent from 'src/components/AlbumComponent'
import SpinnerComponent from 'src/components/SpinnerComponent'
import { getPhotoByType } from 'src/utils'
import { homepageAlbumQuery } from 'src/graphql'

import './HomepageAlbumContainer.scss'

class HomepageAlbumContainer extends Component {
  render() {
    const { data: { loading, error, homepageAlbum } } = this.props

    if (error) {
      return <div className={'HomepageAlbumContainer'}>Error ...</div>
    }

    if (loading) {
      return (
        <div className={'HomepageAlbumContainer'}><SpinnerComponent /></div>
      )
    }

    if (!homepageAlbum || !homepageAlbum.id) {
      return <div className={'HomepageAlbumContainer'}>Bla ...</div>
    }

    let photos = homepageAlbum.photos.map(p => {
      const sizeXL = getPhotoByType(p.sizes, '1024')
      const sizes = ['1024', '800', '500', '320']
      const set = p.sizes
        .filter(s => sizes.indexOf(s.kind) !== 0 && sizes.indexOf(s.kind) >= 0)
        .map(s => {
          return `${s.url} ${s.kind}w`
        })

      return {
        src: sizeXL.url,
        width: sizeXL.width,
        height: sizeXL.height,
        alt: p.title,
        sizes: [
          '(min-width: 480px) 50vw',
          '(min-width: 1024px) 33.3vw',
          '100vw'
        ],
        srcset: set
      }
    })

    if (photos.length > 9) {
      photos = photos.slice(0, 9)
    }

    return (
      <WrapperComponent className={'HomepageAlbumContainer'}>
        <AlbumComponent photos={photos} />
        <div style={{ clear: 'both' }} />
      </WrapperComponent>
    )
  }
}

export default graphql(homepageAlbumQuery)(HomepageAlbumContainer)
