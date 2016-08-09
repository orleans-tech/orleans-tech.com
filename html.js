import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'typography-react'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="apple-touch-icon" sizes="57x57" href={prefixLink('/assets/ico/apple-icon-57x57.png')} />
          <link rel="apple-touch-icon" sizes="60x60" href={prefixLink('/assets/ico/apple-icon-60x60.png')} />
          <link rel="apple-touch-icon" sizes="72x72" href={prefixLink('/assets/ico/apple-icon-72x72.png')} />
          <link rel="apple-touch-icon" sizes="76x76" href={prefixLink('/assets/ico/apple-icon-76x76.png')} />
          <link rel="apple-touch-icon" sizes="114x114" href={prefixLink('/assets/ico/apple-icon-114x114.png')} />
          <link rel="apple-touch-icon" sizes="120x120" href={prefixLink('/assets/ico/apple-icon-120x120.png')} />
          <link rel="apple-touch-icon" sizes="144x144" href={prefixLink('/assets/ico/apple-icon-144x144.png')} />
          <link rel="apple-touch-icon" sizes="152x152" href={prefixLink('/assets/ico/apple-icon-152x152.png')} />
          <link rel="apple-touch-icon" sizes="180x180" href={prefixLink('/assets/ico/apple-icon-180x180.png')} />
          <link rel="icon" type="image/png" sizes="192x192"  href={prefixLink('/assets/ico/android-icon-192x192.png')} />
          <link rel="icon" type="image/png" sizes="32x32" href={prefixLink('/assets/ico/favicon-32x32.png')} />
          <link rel="icon" type="image/png" sizes="96x96" href={prefixLink('/assets/ico/favicon-96x96.png')} />
          <link rel="icon" type="image/png" sizes="16x16" href={prefixLink('/assets/ico/favicon-16x16.png')} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content={prefixLink('/assets/ico/ms-icon-144x144.png')} />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href={prefixLink('/assets/ico/apple-touch-icon-144-precomposed.png')} />

          <title>{title}</title>

          <TypographyStyle typography={typography} />

          {css}
        </head>
        <body id="home" className="wide body-light multipage">
          <div id="react-mount" className="wrapper" dangerouslySetInnerHTML={{ __html: this.props.body }}></div>
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})

// <GoogleFont typography={typography} />
