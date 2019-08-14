import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'
const HomePagePreview = ({ entry, getAsset }) => {
  // const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  // const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      title_hero={entry.getIn(['data', 'title_hero'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      heading_logo={entry.getIn(['data', 'heading_hero'])}
      subheading={entry.getIn(['data', 'subheading'])}
      event={entry.getIn(['data', 'event'])}
      raising_money={entry.getIn(['data', 'raising_money'])}
      foundation={entry.getIn('data', 'foundation')}
      craft={entry.getIn(['data', 'craft'])}
      bottom_hero={{
        image: entry.getIn(['data', 'bottom_hero', 'image']),
        heading: entry.getIn(['data', 'bottom_hero', 'heading']),
      }}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
