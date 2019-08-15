import React from 'react'
import PropTypes from 'prop-types'
import GalleryPageTemplate from '../../components/GalleryPageTemplate'

const GalleryPagePreview = ({ entry, getAsset }) => {
  const entryImages = entry.getIn(['data', 'gallery', 'images'])
  const images = entryImages ? entryImages.toJS() : []

  return (
    <GalleryPageTemplate
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      gallery={{ images }}
      craft={{
        image: entry.getIn(['data', 'craft', 'image']),
        heading: entry.getIn(['data', 'craft', 'heading']),
        text: entry.getIn(['data', 'craft', 'text']),
      }}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
    />
  )
}

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GalleryPagePreview
