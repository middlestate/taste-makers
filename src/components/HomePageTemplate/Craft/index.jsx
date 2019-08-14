import React from 'react'
import PropTypes from 'prop-types'

const Craft = ({
  image,
  heading,
  text,
}) => (
  <section>
    <figure className='is-5by3'>
      <img src={image} />
    </figure>
    <h1 className='is-size-3 has-text-bold'>{heading}</h1>
    <p className='is-size-5 has-text-bold'>{text}</p>
  </section>
)

Craft.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Craft
