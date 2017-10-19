import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

try {
  UIkit.use(Icons);
} catch(e) {
  console.log(e);
}

import '../scss/index.scss'

import Header from '../components/header'
import Footer from '../components/footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Core Template"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div style={{fontWeight: 100}}>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
