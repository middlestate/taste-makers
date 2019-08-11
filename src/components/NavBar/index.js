import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
// import SearchBox from '../SearchBox'
const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <nav className="navbar is-light-blue-er" aria-label="main navigation">
        <div
          className="navbar-brand is-centered"
          style={{ flex: 1, justifyContent: 'center', marginTop: -10 }}>
          <Link to="/" className="navbar-item">
            <img src="/img/snv-logo.svg" alt="logo" />
            <img src="/img/tastemaker-white-01.svg" />
          </Link>
          <div
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            style={{ padding: 10, marginRight: 10, marginTop: 5 }}
            data-target="navMenu"
            onClick={toggleNavbar}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          id="navMenu">
          <div
            className="navbar-end"
            style={{ flex: 1, justifyContent: 'center' }}>
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              Products
            </Link>
            <Link className="navbar-item" to="/artist">
              Highlights
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <a
              href="#donate"
              className="button is-medium is-rounded is-tm-mustard">
              DONATE
            </a>
            <a
              href="#sponsor"
              className="button is-medium is-rounded is-tm-mustard">
              BECOME A SPONSER
            </a>
          </div>
        </div>
      </nav>
    )}
  />
);

export default NavBar;
