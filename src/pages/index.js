import React, {Component} from 'react'
import Link from 'gatsby-link'

import AboutSection from '../components/about-section'
import HeroSection from '../components/hero-section'
import CtaModule from '../components/cta-module'

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <div>
      <HeroSection image={data.heroImage.childImageSharp.sizes}/>
      <AboutSection image={data.aboutImage.childImageSharp.sizes}/>
      <CtaModule/>
    </div>
  )
}


export default IndexPage

export const query = graphql`
query SampleQuery {
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
