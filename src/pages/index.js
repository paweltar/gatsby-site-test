import React, { Component } from 'react'
import Link from 'gatsby-link'

import AboutSection from '../components/about-section'
import HeroSection from '../components/hero-section'
import CtaModule from '../components/cta-module'
import ContactSection from '../components/contact-section'
import GallerySection from '../components/gallery-section'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <HeroSection image={this.props.data.heroImage.childImageSharp.sizes} textData={this.props.data.heroData}/>
        <AboutSection image={this.props.data.aboutImage.childImageSharp.sizes}/>
        <GallerySection galleryData={this.props.data.galleryImages.edges}/>
        <CtaModule/>
        <ContactSection/>
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query SampleQuery {
  galleryImages: allImageSharp(filter: {id: {regex: "/home/paweltar/Projekty/Nauka/Gatsby/sitetest/src/static/gallery/"}}) {
    edges {
      node {
        id
        original {
          width
          height
          src
        }
        resolutions(width: 360, height: 300) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
  aboutImage: file(relativePath: { regex: "/wallhaven-348304/"}) {
    childImageSharp {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  heroImage: file(relativePath: { regex: "/bg-about/"}) {
    childImageSharp {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  heroData: heroJson {
    bigHeader
    description
  }
}
`
