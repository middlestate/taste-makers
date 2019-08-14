import React from 'react'
import PropTypes from 'prop-types'

const Foundation = ({
  image,
  heading,
  text,
}) => (
  <section className='section is-tm-yellow is-paddingless' style={{ position: 'relative' }}>
    <div style={{ height: '100%', width: '115vw', borderTopLeftRadius: '50%', borderTopRightRadius: '50%', marginLeft: -50, overflow: 'hidden' }}>
      <figure className='is-5by3'>
        <img style={{ borderTopRightRadius: '100% 0% 0%', zIndex: -1 }} src={image} />
      </figure>
    </div>
    <div className='overlay' style={{ width: '115vw', borderTopLeftRadius: '50%', borderTopRightRadius: '50%', marginLeft: -50, opacity: 0.8 }} />
    {/* <div className='columns '>
        <div className='column is-full'> */}
    <div className='text'>
      <h1 className='is-size-2-desktop is-size-7-mobile has-text-weight-bold has-text-white has-text-centered' style={{ width: '80vw', paddingBottom: 20 }}>
        {heading}
      </h1>
      <p className='has-text-bold has-text-white is-size-4 is-size-7-mobile'>{text}</p>
    </div>
    {/* </div>
      </div> */}
  </section>
)

Foundation.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Foundation
