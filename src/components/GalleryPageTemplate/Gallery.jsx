import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const useHover = () => {
  const [value, setValue] = useState(false)
  const ref = useRef(null)
  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
          node.removeEventListener('mouseover', handleMouseOut)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    [ref.current]
  )
  return [ref, value]
}

const displayInfo = (artist, text) => (
  <div className='has-text-black' style={{ float: 'right', height: 200, width: 300, padding: 10 }}>
    {/* TODO: add fancy slideout animation */}
    <h1 className='is-size-5 has-text-bold has-text-centered'>{artist}</h1>
    <p className='is-size-7'>{text}</p>
  </div>
)
const Gallery = ({ gridItems }) => {

  return (
    <div className='container'>
      {gridItems.map(({ image, artist, text }, keys) =>{
        const [hoverRef, isHovered] = useHover()
        return (
        <div key={keys} ref={hoverRef}>
          <figure className='image' style={{height: 200, width: 200}}>
            <img style={{height: 200, width: 200, borderRadius: '50%'}} src={image} />
          </figure>
          {isHovered ? displayInfo(artist, text) : ''}
        </div>
        )})
       }
    </div>
  )
}

Gallery.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      artist: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Gallery
