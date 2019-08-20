import React from 'react'
import PropTypes from 'prop-types'
const RaisingMoney = ({
  image,
  heading,
  text,
}) => (
  <section
    className='section is-tm-yellow has-text-white'
    style={{ padding: 10 }}>
    <div className='columns is-mobile is-centered' style={{ paddingTop: '5%', paddingBottom: '5%' }}>
      <div className='column is-10 is-offset-1'>
        <div className='tile is-ancestor'>
          <div className='tile is-6 is-parent'>
            <div className='tile is-child ' style={{ backgroundColor: 'transparent' }}>
              <figure className='is-square is-rounded' style={{ paddingTop: 20, paddingBottom: 50, paddingLeft: 20 }}>
                <img
                  className='image'
                  src={image}
                  alt='David Pacheco Tropa Magica'
                />
              </figure>
            </div>
          </div>
          <div className='tile is-parent is-vertical is-gapless  is-6' style={{ paddingTop: 50, backgroundColor: 'transparent' }}>
            <div className='tile is-child is-6' style={{ backgroundColor: 'transparent' }}>
              <h1 className='is-size-2 has-text-left has-text-white' >{heading}</h1>
            </div>
            <div className='tile is-child has-text-white is-7' style={{ backgroundColor: 'transparent' }}>
              <p className='has-text-bold is-size-5'>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

RaisingMoney.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default RaisingMoney
