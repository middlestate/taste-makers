import React from 'react'
import PropTypes from 'prop-types'

const Craft = ({
  image,
  heading,
  text,
}) => (
  <section className='is-light-blue-er is-paddingless is-marginless' style={{ position: 'relative' }}>
    <div className='is-light-blue-er is-hidden-mobile' style={{ height: 600, width: 3800, border: 'solid transparent 5px', borderTopLeftRadius: '60%', borderTopRightRadius: '60%', transform: 'translate(-1300px, -100px)', overflow: 'hidden', zIndex: 10 }}>
      <div ><p> </p></div>
    </div>
    <div className='overlay' style={{ backgroundColor: 'hsla(196, 86%, 60%, 1)', opacity: 1 }}>
      <div className='columns is-mobile is-centered'>
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
            <div className='tile is-parent is-vertical is-gapless  is-6' style={{ paddingTop: 50, backgroundColor: 'transparent', zIndex: 20 }}>
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
    </div>
  </section>
)

Craft.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Craft
