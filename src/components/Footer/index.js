import React from 'react'
// import config from '../../../config'
import { Link } from 'gatsby'
import Logo from '../../assets/img/tastemakers-primary-01.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='footer is-paddingless'>
      <div className='section is-ea-black'>
        <div className='columns is-centered is-mobile'>
          <div className='column is-one-fifth-desktop is-half-mobile'>
            <p className='has-text-weight-bold has-text-light-grey is-size-6 is-size-7-mobile has-text-centered'>
              <u>LET'S STAY IN TOUCH</u>
            </p>
          </div>
        </div>
      </div>
      <div className='section is-low-starch-blue'>
        <div className='columns is-centered is-mobile'>
          <div className='column is-one-fifth-desktop is-half-mobile'>
            <figure className='image is-128x128'>
              <img src={Logo} />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
