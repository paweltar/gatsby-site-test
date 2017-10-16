import React, {Component} from 'react'
import Link from 'gatsby-link'

import AboutSection from '../components/about-section'

const IndexPage = ({data}) => {
  return (
    <div>
      <AboutSection image={data.file.childImageSharp.sizes}/>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}


export default IndexPage

export const query = graphql`
query SampleQuery {
  file(relativePath: { regex: "/wallhaven-348304/"}) {
    childImageSharp {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
  }
}
`
