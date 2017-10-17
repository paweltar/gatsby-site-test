import React, {Component} from 'react'
import Link from 'gatsby-link'
import UIkit, {Icon} from 'uikit'

import './styles.scss'

class Footer extends Component {
  render() {
    return (
      <div>
        	<div className="uk-section-media uk-light uk-background-cover uk-padding-small uk-background-fixed menu-bottom__container">
            <div className="uk-container">
              <p className="uk-heading-line uk-text-center"><span style={{cursor: 'pointer'}} data-uk-icon="icon: chevron-up; ratio: 1.5" data-uk-totop data-uk-scroll></span></p>
            </div>
          </div>
            <div className="uk-section uk-section-secondary uk-section-medium uk-light">
              <div className="uk-container">
                <div className="uk-grid-match uk-grid-divider" data-uk-grid>
                  <div className="uk-width-1-2@m">
                    <ul className="uk-nav uk-nav-default">
                      <li className="uk-nav-header">Company Name</li>
                      <li className="uk-nav-divider"></li>
                      <li><span className="uk-text-meta uk-margin-small-right">city:</span>Macclesfield Forest</li>
                      <li><span className="uk-text-meta uk-margin-small-right">street:</span>68 South Crescent</li>
                      
                        <li><span className="uk-text-meta uk-margin-small-right">phone:</span>202-555-0101</li>
                        <li><span className="uk-text-meta uk-margin-small-right">phone:</span>01632 960194</li>
                      
                      <li><span className="uk-text-meta uk-margin-small-right">email:</span>company@domain.com</li>
                      <li className="uk-nav-divider"></li>
                      <li>
                        <p className="uk-margin-top">Some optional info here:</p>
                      </li>
                      <li className="uk-heading-bullet uk-margin-bottom">You want to know more?</li>
                      <ul className="uk-list uk-list-bullet">
                        
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        
                      </ul>
                      <li className="uk-margin-top"><ul className="uk-iconnav">
                        
                          <li><a href="#" data-uk-icon="icon: facebook"></a></li>
                          <li><a href="#" data-uk-icon="icon: twitter"></a></li>
                          <li><a href="#" data-uk-icon="icon: pinterest"></a></li>
                          <li><a href="#" data-uk-icon="icon: youtube"></a></li>
                        
                      </ul></li>
                    </ul>
                  </div>
                  <div className="uk-width-1-2@m">
                    <form id="contact-form">
                      <fieldset className="uk-fieldset uk-position-relative uk-dark">
                        <legend className="uk-legend">Contact Form</legend>
                        <div className="uk-margin">
                          <input className="uk-input uk-width-1-1" type="email" placeholder="Your email address" name="_replyto" required />
                        </div>
                        <div className="uk-margin">
                          <textarea className="uk-textarea uk-width-1-1" rows="5" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <input type="hidden" name="_subject" value="You've got new message from your website!" />
                        <input type="text" name="_gotcha" style={{display: 'none'}} />
                        <div className="uk-margin">
                          <input className="uk-button uk-button-default uk-width-1-1" type="submit" value="Send"/>
                        </div>

                        <div className="uk-overlay-primary uk-position-cover form-overlay--sending">
                            <div className="uk-position-center">
                              <div className="uk-text-center">
                                <span className="uk-animation-slide-top-small" data-uk-icon="icon: mail; ratio: 3"></span>
                                <h4 className="uk-animation-slide-bottom-small">Sending message.</h4>
                              </div>
                            </div>
                        </div>

                        <div className="uk-overlay-primary uk-position-cover form-overlay--success">
                            <div className="uk-position-center">
                              <div className="uk-text-center">
                                <span className="uk-animation-slide-top-small" data-uk-icon="icon: check; ratio: 3" style={{color: '#4F8A10'}}></span>
                                <h4 className="uk-animation-slide-bottom-small">Message sent succesfully.</h4>
                              </div>
                            </div>
                        </div>

                        <div className="uk-overlay-primary uk-position-cover form-overlay--error">
                            <div className="uk-position-center">
                              <div className="uk-text-center">
                                <span className="uk-animation-slide-top-small" data-uk-icon="icon: close; ratio: 3" style={{color: 'red'}}></span>
                                <h4 className="uk-animation-slide-bottom-small">Unfotrunately, we couldn't send your message. Check if your email is correct and try again. </h4>
                              </div>
                            </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          <div className="uk-section-media uk-light uk-background-cover uk-background-fixed uk-padding-small menu-bottom__container">
            <div className="uk-container uk-container-small">
              <p className="uk-text-meta uk-margin-small-right uk-text-center uk-heading-line"><span>Company Name | 2017 &copy;</span></p>
            </div>
          </div>
      </div>
    )
  }
}

export default Footer