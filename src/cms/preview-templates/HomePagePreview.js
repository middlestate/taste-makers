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
      event={{
        date: entry.getIn(['data', 'event', 'date']),
        text: entry.getIn(['data', 'event', 'text']),
      }}
      raising_money={{
        image: entry.getIn(['data', 'raising_money', 'image']),
        heading: entry.getIn(['data', 'raising_money', 'text']),
        text: entry.getIn(['data', 'raising_money', 'text']),
      }}
      foundation={{
        image: entry.getIn('data', 'foundation', 'image'),
        heading: entry.getIn(['data', 'foundation', 'heading']),
        text: entry.getIn(['data', 'foundation', 'text']),
      }}
      craft={{
        image: entry.getIn(['data', 'craft', 'image']),
        heading: entry.getIn(['data', 'craft', 'heading']),
        text: entry.getIn(['data', 'craft', 'text']),
      }}
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
