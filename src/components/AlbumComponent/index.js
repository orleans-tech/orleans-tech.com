import React, { Component } from 'react'

import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

export default class AlbumComponent extends Component {
  constructor() {
    super()
    this.state = {
      lightboxCurrentImage: 0,
      lightboxIsOpen: false
    }
    this.openLightbox = this.openLightbox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.onLightboxPrev = this.onLightboxPrev.bind(this)
    this.onLightboxNext = this.onLightboxNext.bind(this)
  }

  render() {
    const { photos } = this.props

    return (
      <div className={'AlbumComponent'}>
        <Gallery cols={3} photos={photos} onClickPhoto={this.openLightbox} />
        <Lightbox
          images={photos}
          backdropClosesModal={true}
          onClose={this.closeLightbox}
          onClickPrev={this.onLightboxPrev}
          onClickNext={this.onLightboxNext}
          currentImage={this.state.lightboxCurrentImage}
          isOpen={this.state.lightboxIsOpen}
          width={1600}
        />
      </div>
    )
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      lightboxCurrentImage: index,
      lightboxIsOpen: true
    })
  }

  closeLightbox() {
    this.setState({
      lightboxCurrentImage: 0,
      lightboxIsOpen: false
    })
  }

  onLightboxPrev() {
    this.setState({
      lightboxCurrentImage: this.state.lightboxCurrentImage - 1
    })
  }

  onLightboxNext() {
    this.setState({
      lightboxCurrentImage: this.state.lightboxCurrentImage + 1
    })
  }
}
