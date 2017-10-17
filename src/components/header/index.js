import React, {Component} from 'react'
import Link from 'gatsby-link'
import UIkit from 'uikit'

import './styles.scss'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar--top uk-navbar-container uk-visible@s" style={{zIndex: 980}} data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom" data-uk-navbar>
          <div className="uk-navbar-left uk-margin-large-left">
            <Link className="uk-navbar-item uk-logo" to="/">Company Name</Link>
          </div>
        
          <div className="uk-navbar-right uk-margin-large-right">
            <ul className="uk-navbar-nav">
              
                <li><Link to='/page-2'>Page 2</Link></li>
              
            </ul>
          </div>
        </nav>
        
        <div className="uk-position-relative uk-hidden@s">
          <nav className="navbar--mobile uk-navbar-container" style={{zIndex: 980}} data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom" data-uk-navbar="dropbar: true; dropbar-mode: push; mode: click">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li onClick={() => UIkit.modal('#modal-full').show()}>
                  <a className="uk-navbar-toggle">
                  <span data-uk-icon="icon: menu"></span> <span className="uk-margin-small-left">Menu</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        
        <div id="modal-full" className="uk-modal-full mobile-menu" data-uk-modal onClick={() => UIkit.modal('#modal-full').hide()}>
          <div className="uk-modal-dialog navigation__dialog">
            <button className="uk-modal-close-full" type="button" data-uk-close></button>
            <div className="uk-flex uk-flex-center uk-flex-middle nav__container">
              <ul className="uk-nav-primary uk-nav-center uk-nav-parent-icon" data-uk-nav>
                <li className="uk-nav-header">Menu</li>
                <li className="uk-nav-divider"></li>
                <li><Link to='/'>Home</Link></li>
                
                  <li><Link to='/page-2'>Page 2</Link></li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Header