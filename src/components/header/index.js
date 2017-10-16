import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    <nav className="navbar--top uk-navbar-container uk-visible@s" style={{zIndex: 980}} data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom" data-uk-navbar>
      <div className="uk-navbar-left uk-margin-large-left">
        <Link className="uk-navbar-item uk-logo" to="/">Company Name</Link>
      </div>
    
      <div className="uk-navbar-right uk-margin-large-right">
        <ul className="uk-navbar-nav">
          
            <li><a href="#" data-uk-scroll>Link 1</a></li>
          
        </ul>
      </div>
    </nav>
    
    <div className="uk-position-relative uk-hidden@s">
      <nav className="navbar--mobile uk-navbar-container" style={{zIndex: 980}} data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom" data-uk-navbar="dropbar: true; dropbar-mode: push; mode: click">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <a className="uk-navbar-toggle" href="#modal-full" data-uk-toggle>
                <span data-uk-navbar-toggle-icon></span> <span className="uk-margin-small-left">Menu</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
    <div id="modal-full" className="uk-modal-full mobile-menu" data-uk-modal>
      <div className="uk-modal-dialog navigation__dialog">
        <button className="uk-modal-close-full" type="button" data-uk-close></button>
        <div className="uk-flex uk-flex-center uk-flex-middle nav__container">
          <ul className="uk-nav-primary uk-nav-center uk-nav-parent-icon" data-uk-nav>
            <li className="uk-nav-header">Menu</li>
            <li className="uk-nav-divider"></li>
            <li><a href="/">Home</a></li>
            
              <li><a href="#" data-uk-scroll>Link 1</a></li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Header