import React from 'react'

import './styles.scss'
import MyMapComponent from './map'

const ContactSection = () => {
  return (
    <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-height-match data-uk-grid id="section-contact">
      <div className="uk-padding-large">
        <h1 className="uk-heading-line uk-text-center"><span>Location & Contact</span></h1>
        <p>Macclesfield Forest 68 South Crescent</p>
        <p><span data-uk-icon="icon: mail"></span>  company@domain.com</p>
        
          <p><span data-uk-icon="icon: phone"></span>202-555-0101</p>
          <p><span data-uk-icon="icon: phone"></span>01632 960194</p>
        
        <h1 className="uk-heading-line uk-text-center"><span>Follow Us</span></h1>
        <ul className="uk-iconnav social-media-list">
        
          <li><a href="#" data-uk-icon="icon: facebook"></a></li>
          <li><a href="#" data-uk-icon="icon: twitter"></a></li>
          <li><a href="#" data-uk-icon="icon: pinterest"></a></li>
          <li><a href="#" data-uk-icon="icon: youtube"></a></li>
        
        </ul>
      </div>
      <div id="map-container">
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzKkIdu16ZlcgEA_OY0sf1RXqxeDE7Qq4"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
    </div>
  )
}

export default ContactSection