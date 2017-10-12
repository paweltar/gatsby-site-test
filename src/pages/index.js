import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <br/>
    <ul data-uk-accordion>
      <li className="uk-open">
          <h3 className="uk-accordion-title">Item 1</h3>
          <div className="uk-accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
      </li>
      <li>
          <h3 className="uk-accordion-title">Item 2</h3>
          <div className="uk-accordion-content">
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
          </div>
      </li>
      <li>
          <h3 className="uk-accordion-title">Item 3</h3>
          <div className="uk-accordion-content">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
          </div>
      </li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
