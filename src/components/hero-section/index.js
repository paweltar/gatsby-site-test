import React from 'react'
import Link from 'gatsby-link'

const HeroSection = (input) => (
  <div className="uk-section uk-section-large uk-section-media uk-light uk-background-cover section--hero" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url(${input})`
  }} id="section-slider">
    <div className="uk-container header__text">
        <h1 className="uk-heading-hero">{input}</h1>
        <h3>{input}</h3>
        <a href="#section-about" className="uk-icon-link uk-margin-top flash" data-uk-icon="icon: chevron-down; ratio: 3" data-uk-scroll></a>
    </div>
  </div>
)

export default HeroSection