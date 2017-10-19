import React, {Component} from 'react'
import Link from 'gatsby-link'

import AboutSection from '../components/about-section'
import HeroSection from '../components/hero-section'
import CtaModule from '../components/cta-module'
import ContactSection from '../components/contact-section'
import GallerySection from '../components/gallery-section'

const IndexPage = ({data}) => {
  return (
    <div>
      <HeroSection image={data.heroImage.childImageSharp.sizes}/>
      <AboutSection image={data.aboutImage.childImageSharp.sizes}/>
      <GallerySection galleryData={data.galleryImages.edges}/>
      <CtaModule/>
      <ContactSection/>
    </div>
  )
}


export default IndexPage

export const query = graphql`
query SampleQuery {
  galleryImages: allFile(filter: {id: {regex: "/home/paweltar/Projekty/Nauka/Gatsby/sitetest/src/static/gallery/"}}) {
    edges {
      node {
        id
        childImageSharp {
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
}
`
