import React from 'react'
import PropTypes from 'prop-types'

const BottomHero = ({
  image,
  heading,
}) => (
  <section className='hero'>
    <div className='hero-image'>
      <img src={image} />
    </div>
    <div className='columns is centered'>
      <div className='column is-half'>
        <h1 className='is-size-3'>{heading}</h1>
      </div>
    </div>
  </section>
)

BottomHero.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
}

export default BottomHero
