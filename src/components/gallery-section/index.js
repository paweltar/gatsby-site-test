import React, { Component } from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import Img from 'gatsby-image'

import "./styles.scss";

class GallerySection extends Component {
  render() {
    console.log(this.props.galleryData)
    const galleryData = this.props.galleryData;

    const settings = {
      infinite: true,
      draggable: true,
      arrows: true,
      dots: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };
    if (galleryData) {
      return (
        <div className="uk-section uk-section-muted" id="section-gallery">
          <div
            className="uk-container gallery-container"
            data-uk-lightbox="animation: scale"
          >
            <Slider {...settings} className="slides-container">
              {galleryData.map(image => (
                <a
                  className="uk-link-reset"
                  href={image.node.original.src}
                  data-caption="Image description"
                  key={image.node.id}
                >
                  <div className="slider-item">
                    <div className="uk-cover-container uk-height-medium subtle-shadow">
                      <Img resolutions={image.node.resolutions} alt="Gallery image" style={{width: '100%', height: '100%'}}/>
                    </div>
                    <h1 className="uk-heading-bullet">Heading Bullet</h1>
                    <p className="uk-article-meta">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </a>
              ))}
            </Slider>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }
  }
}

export default GallerySection;
