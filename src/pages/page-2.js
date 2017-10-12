import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'



const SecondPage = ({data}) => (
  <div>
    <article className="uk-article">
    
        <h1 className="uk-article-title"><a className="uk-link-reset" href="">Heading</a></h1>
    
        <p className="uk-article-meta">Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a></p>

        <div className="uk-cover-container uk-height-medium">
          <Img resolutions={data.file.childImageSharp.resolutions} fadeIn title="Title here" alt="Alt text here" />
        </div>
    
        <p className="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
    
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
        <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
            <div>
                <a className="uk-button uk-button-text" href="#">Read more</a>
            </div>
            <div>
                <a className="uk-button uk-button-text" href="#">5 Comments</a>
            </div>
            <div>
              <span data-uk-icon="icon: heart"></span>
            </div>
        </div>
    
    </article>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage

export const query = graphql`
query GatsbyImageSampleQuery {
  file(relativePath: { regex: "/wallhaven-428824/"}) {
    childImageSharp {
      # Specify the image processing steps right in the query
      # Makes it trivial to update as your page's design changes.
      resolutions(width: 1250, height: 350) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
}
`
