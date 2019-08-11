import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const HomePageTemplate = ({
  meta_title,
  meta_description,
  title,
  title_hero,
  heading_logo,
  heading,
  subheading,
  event,
  raising_money,
  foundation,
  craft,
  bottom_hero
}) => (
  <Fragment>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <section className="hero has-section-padding-none">
      <div className="hero-image">
        <img src={title_hero} />
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns ">
            <div className="column is-4 is-offset-2">
              <div className="section">
                <img src={heading_logo} />
                <h1 className="title is-size-3">{heading}</h1>
                <h5 className="subtitle is-size-7">{subheading}</h5>
                <div
                  className="is-tm-mustard is-rounded"
                  style={{ width: 449, height: 135 }}>
                  <p>{event.date}</p>
                  <p>{event.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Raising Money */}
    <section
      className="section is-paddingless is-tm-yellow"
      style={{ padding: 0 }}>
      <figure className="is-5by3 is-rounded">
        <img
          className="image"
          src={raising_money.image}
          alt="David Pacheco Tropa Magica"
        />
      </figure>
      <h1 className="is-size-3">{raising_money.heading}</h1>
      <p className="has-text-bold is-size-5">{raising_money.text}</p>
    </section>
    {/* Foundation */}
    <section className="section is-tm-yellow">
      <div className="columns is-centered">
        <div className="column">
          <h1 className="is-size-3 has-text-weight-bold has-text-centered has-text-black">
            {foundation.heading}
          </h1>
          <p className="has-text-bold is-size-5">{foundation.text}</p>
        </div>
      </div>
    </section>
    {/* Craft */}
    <section>
      <figure className="is-5by3">
        <img src={craft.image} />
      </figure>
      <h1 className="is-size-3 has-text-bold">{craft.heading}</h1>
      <p className="is-size-5 has-text-bold">{craft.text}</p>
    </section>
    {/* bottom-hero */}
    <section className="hero">
      <div className="hero-image">
        <img src={bottom_hero.image} />
      </div>
      <div className="columns is centered">
        <div className="column is-half">
          <h1 className="is-size-3">{bottom_hero.heading}</h1>
        </div>
      </div>
    </section>
  </Fragment>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  title_hero: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading_logo: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  event: PropTypes.shape({
    date: PropTypes.string,
    text: PropTypes.string
  }),
  raising_money: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string
  }),
  foundation: PropTypes.shape({
    background: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string
  }),
  craft: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string
  }),
  bottom_hero: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string
  })
};

export default HomePageTemplate;
