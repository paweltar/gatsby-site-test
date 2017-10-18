import React, { Component } from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";

import "./styles.scss";
import sampleImg from "./images/img1.jpg";

class GallerySection extends Component {
  render() {
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
    return (
      <div className="uk-section uk-section-muted" id="section-gallery">
        <div className="uk-container gallery-container" data-uk-lightbox="animation: scale">
          <Slider
            {...settings}
            className="slides-container"
          >
            <a
              className="uk-link-reset"
              href={sampleImg}
              data-caption="Image description 1"
            >
              <div className="slider-item">
                <div className="uk-cover-container uk-height-medium subtle-shadow">
                  <canvas width="200" height="200" />
                  <img data-uk-cover src={sampleImg} alt="Some text here" />
                </div>
                <h1 className="uk-heading-bullet">Heading Bullet</h1>
                <p className="uk-article-meta">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </a>

            <a
              className="uk-link-reset"
              href={sampleImg}
              data-caption="Image description 2"
            >
              <div className="slider-item">
                <div className="uk-cover-container uk-height-medium subtle-shadow">
                  <canvas width="200" height="200" />
                  <img data-uk-cover src={sampleImg} alt="Some text here" />
                </div>
                <h1 className="uk-heading-bullet">Heading Bullet</h1>
                <p className="uk-article-meta">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </a>

            <a
              className="uk-link-reset"
              href={sampleImg}
              data-caption="Image description 3"
            >
              <div className="slider-item">
                <div className="uk-cover-container uk-height-medium subtle-shadow">
                  <canvas width="200" height="200" />
                  <img data-uk-cover src={sampleImg} alt="Some text here" />
                </div>
                <h1 className="uk-heading-bullet">Heading Bullet</h1>
                <p className="uk-article-meta">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </a>

            <a
              className="uk-link-reset"
              href={sampleImg}
              data-caption="Image description 4"
            >
              <div className="slider-item">
                <div className="uk-cover-container uk-height-medium subtle-shadow">
                  <canvas width="200" height="200" />
                  <img data-uk-cover src={sampleImg} alt="Some text here" />
                </div>
                <h1 className="uk-heading-bullet">Heading Bullet</h1>
                <p className="uk-article-meta">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </a>
          </Slider>
        </div>
      </div>
    );
  }
}

export default GallerySection;
