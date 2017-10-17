import React from 'react'
import Link from 'gatsby-link'

import './styles.scss'

const CtaModule = () => (
  <div className="uk-section uk-section-media uk-light uk-background-cover uk-background-fixed cta-module" id="cta-module">
    <div className="uk-container uk-text-center">
        <h1>Additional modules</h1>
        <p>Click here to see additional modules available for this template.</p>
        <Link className="uk-button uk-button-default" to="/page-2">See more</Link>
    </div>
  </div>
)

export default CtaModule

