import React from 'react'
import PropTypes from 'prop-types'

const BottomHero = ({
  image,
  heading,
}) => (
  <section className='section is-marginless is-paddingless'>
    <div className='hero is-fullheight' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
      <div className='hero-body'>
        <h1 className='is-size-3 has-text-centered has-text-white'>{heading}</h1>
      </div>
    </div>
  </section>
)

BottomHero.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
}

export default BottomHero
