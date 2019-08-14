import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        title_hero={frontmatter.title_hero}
        heading_logo={frontmatter.heading_logo}
        event={frontmatter.event}
        raising_money={frontmatter.raising_money}
        foundation={frontmatter.foundation}
        craft={frontmatter.craft}
        bottom_hero={frontmatter.bottom_hero}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        title
        title_hero
        heading_logo
        heading
        subheading
        meta_title
        meta_description
        event {
          date
          text
        }
        raising_money {
          image
          heading
          text
        }
        foundation {
          image
          heading
          text
        }
        craft {
          image
          heading
          text
        }
        bottom_hero {
          image
          heading
        }
      }
    }
  }
`
