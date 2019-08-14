import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

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
    <section
      className='section is-tm-yellow has-text-white'
      style={{ padding: 10 }}>
      <div className='columns is-mobile is-centered'>
        <div className='column is-10 is-offset-1'>
          <div className='tile is-ancestor'>
            <div className='tile is-6 is-parent'>
              <div className='tile is-child ' style={{ backgroundColor: 'transparent' }}>
                <figure className='is-square is-rounded' style={{ paddingTop: 20, paddingBottom: 50, paddingLeft: 20 }}>
                  <img
                    className='image'
                    src={raising_money.image}
                    alt='David Pacheco Tropa Magica'
                  />
                </figure>
              </div>
            </div>
            <div className='tile is-parent is-vertical is-gapless  is-6' style={{ paddingTop: 50, backgroundColor: 'transparent' }}>
              <div className='tile is-child is-6 ' style={{ backgroundColor: 'transparent' }}>
                <h1 className='is-size-2 has-text-left has-text-white' >{raising_money.heading}</h1>
              </div>
              <div className='tile is-child has-text-white is-7 ' style={{ backgroundColor: 'transparent' }}>
                <p className='has-text-bold is-size-5 '>{raising_money.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Foundation */}
    <section className='section is-tm-yellow is-paddingless' style={{ position: 'relative' }}>
      <div style={{ height: '100%', width: '115vw', borderTopLeftRadius: '50%', borderTopRightRadius: '50%', marginLeft: -50, overflow: 'hidden' }}>
        <figure className='is-5by3'>
          <img style={{ borderTopRightRadius: '100% 0% 0%', zIndex: -1 }} src={foundation.background} />
        </figure>
      </div>
      <div className='overlay' style={{ width: '115vw', borderTopLeftRadius: '50%', borderTopRightRadius: '50%', marginLeft: -50, opacity: 0.8 }} />
      {/* <div className='columns '>
        <div className='column is-full'> */}
      <div className='text'>
        <h1 className='is-size-2-desktop is-size-7-mobile has-text-weight-bold has-text-white has-text-centered' style={{ width: '80vw', paddingBottom: 20 }}>
          {foundation.heading}
        </h1>
        <p className='has-text-bold has-text-white is-size-4 is-size-7-mobile'>{foundation.text}</p>
      </div>
      {/* </div>
      </div> */}
    </section>
    {/* Craft */}
    <section>
      <figure className='is-5by3'>
        <img src={craft.image} />
      </figure>
      <h1 className='is-size-3 has-text-bold'>{craft.heading}</h1>
      <p className='is-size-5 has-text-bold'>{craft.text}</p>
    </section>
    {/* bottom-hero */}
    <section className='hero'>
      <div className='hero-image'>
        <img src={bottom_hero.image} />
      </div>
      <div className='columns is centered'>
        <div className='column is-half'>
          <h1 className='is-size-3'>{bottom_hero.heading}</h1>
        </div>
      </div>
    </section>
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
    background: PropTypes.string,
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
