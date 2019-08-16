import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import GalleryPageTemplate from '../components/GalleryPageTemplate'
import Layout from '../components/Layout'

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <GalleryPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        gallery={frontmatter.gallery}
        craft={frontmatter.craft}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const galleryQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        subheading
        gallery {
          images {
            image
            artist
            text
          }
        }
        craft {
          image
          heading
          text
        }
        meta_title
        meta_description
      }
    }
  }
`
export default GalleryPage
