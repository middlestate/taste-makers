import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import RaisingMoney from './RaisingMoney'
import Foundation from './Foundation'
import Craft from './Craft'
import BottomHero from './BottomHero'

const HomePageTemplate = ({
  meta_title,
  meta_description,
  title,
  title_hero,
  heading_logo,
  heading,
  subheading,
  event,
  raising_money,
  foundation,
  craft,
  bottom_hero,
}) => (
  <Fragment>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-fullheight-with-navbar' style={{ backgroundImage: `url(${title_hero})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
      <div className=' overlay'>
        <div className='columns is-mobile is-centered is-gapless '>
          <div className='column is-half' />
        </div>
      </div>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-mobile is-centered is-8'>
            <div className='column is-half has-text-centered'>
              <figure className='image is-256x256 is-inline-block' style={{ maxWidth: 200 }}>
                <img src={heading_logo} />
              </figure>
              <h1 className='title is-size-1 is-size-4-mobile has-text-white is-centered'>{heading}</h1>
              <h5 className='subtitle is-size-4 is-size-7-mobile has-text-white has-text-centered'>
                {subheading}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-footer'>
        <div className='container'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-half has-text-centered'>
              <div
                className='is-tm-mustard has-text-white has-text-centered'
                style={{
                  width: '50%',
                  minWidth: 250,
                  height: 135,
                  border: 1,
                  borderColor: '#707070',
                  borderRadius: '65px 65px 65px 65px',
                  marginBottom: 50,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                <p className='is-size-3' >{event.date}</p>
                <p className='is-size-7'>{event.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Raising Money */}
    <RaisingMoney
      image={raising_money.image}
      heading={raising_money.heading}
      text={raising_money.text}
    />
    {/* Foundation */}
    <Foundation
      image={foundation.image}
      heading={foundation.heading}
      text={foundation.text}
    />
    {/* Craft */}
    <Craft
      image={craft.image}
      heading={craft.heading}
      text={craft.text}
    />
    {/* bottom-hero */}
    <BottomHero
      image={bottom_hero.image}
      heading={bottom_hero.heading}
    />
  </Fragment>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  title_hero: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading_logo: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  event: PropTypes.shape({
    date: PropTypes.string,
    text: PropTypes.string,
  }),
  raising_money: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
  }),
  foundation: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
  }),
  craft: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
  }),
  bottom_hero: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
  }),
}

export default HomePageTemplate
