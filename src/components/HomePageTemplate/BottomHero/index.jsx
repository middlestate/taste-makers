import React from 'react'
import PropTypes from 'prop-types'

const BottomHero = ({
  image,
  heading,
}) => (
  <section className='section is-marginless is-paddingless'>
    <div className='hero is-fullheight' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', boxShadow: 'inset 0 0 0 1000px rgba(255,255,255,.3)' }}>
      <div className='hero-body'>
        <h1 className='is-size-3 has-text-centered has-text-white' style={{ width: '-webkit-fill-available' }}>{heading}</h1>
      </div>
    </div>
  </section>
)

BottomHero.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
}

export default BottomHero
