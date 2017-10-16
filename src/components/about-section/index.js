import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './styles.scss'

const AboutSection = ({image}) => {
  console.log(image)
  return (
    <div className="uk-section uk-section-default section--about" id="section-about">
      <div className="uk-container">
        <div className="uk-grid-match uk-child-width-1-2@m" data-uk-grid data-uk-height-match>
          <div data-uk-scrollspy="cls: uk-animation-slide-left-small; repeat: true">
            <div className="uk-cover-container uk-height-large subtle-shadow about-image-container">
              <Img sizes={image} fadeIn grayscale title="Title here" alt="Alt text here" />
            </div>
          </div>
          <div data-uk-scrollspy="cls: uk-animation-slide-right-small; repeat: true">
            <article className="uk-article">
              <h1 className="uk-article-title">Title</h1>
              <p className="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection