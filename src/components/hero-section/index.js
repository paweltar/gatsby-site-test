import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './styles.scss'

const HeroSection = ({image}) => (
  <div className="uk-section uk-section-large uk-section-media uk-light uk-cover-container section--hero" id="section-slider">
    <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: -1}} className="uk-cover">
      <Img 
        sizes={image} 
        fadeIn
        title="Title here" 
        alt="Alt text here"
      />
    </div>
    <div className="uk-container header__text" data-uk-scrollspy="target: > .animated-text; cls:uk-animation-slide-top-small; delay: 250">
        <h1 className="uk-heading-hero animated-text">Header Text</h1>
        <h3 className="animated-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        <a href="#section-about" className="uk-icon-link uk-margin-top flash" data-uk-icon="icon: chevron-down; ratio: 3" data-uk-scroll></a>
    </div>
  </div>
)

export default HeroSection