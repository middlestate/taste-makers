import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Gallery from './Gallery'
import Craft from '../Craft'

const GalleryPageTemplate = ({
  title,
  heading,
  subheading,
  description,
  gallery,
  craft,
  meta_title,
  meta_description,
}) => (
  <Fragment>
    <Helmet>
      {/* Helmet stuff */}
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='section'>
      {/* Gallery */}
      <Gallery
        gridItems={gallery.images}
      />
    </section>
    <section className='section'>
      <Craft
        image={craft.image}
        heading={craft.heading}
        text={craft.text}
      />
    </section>
  </Fragment>
)

GalleryPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  gallery: PropTypes.shape({
    images: PropTypes.array,
  }),
  craft: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
  }),
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default GalleryPageTemplate
