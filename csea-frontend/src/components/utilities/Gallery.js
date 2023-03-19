import React, { Component } from "react";
import Slider from "react-slick";
import './gallery.css';

import galleryimg1 from '../images/gallery/acheivement1.jpeg';

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <img src = {index}/>
      </div>
    );
  }
}


export default class Responsive extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed:1000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
           <CustomSlide index={"https://picsum.photos/id/10/600"} />
          <CustomSlide index={"https://picsum.photos/id/20/600"} />
          <CustomSlide index={"https://picsum.photos/id/30/600"} />
          <CustomSlide index={"https://picsum.photos/id/40/600"} />
          <CustomSlide index={"https://picsum.photos/id/50/600"} />
          <CustomSlide index={"https://picsum.photos/id/60/600"} />
        </Slider>
      </div>
    );
  }
}