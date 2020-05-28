import React,{Component} from "react"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SectionProjects() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    centerPadding:0,
    
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div>
          <section className="section section-content section_pb-xsmall bg-dark text-center "style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 section-content__header">
              <div className="section-content__subheading subheading split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines"><span>Our latest works</span></div>
              <div className="split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines">
                <h3>WE PROVIDE THE FINISHING TOUCH, THE FINAL ACCESSORY TO YOUR PERSPECTIVES</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slider {...settings}>
      
      <div className="parent">
  <div className="img">
    <img src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="img" alt="" />
  </div>
  <div className="info">
    <h3>House Interior</h3>
    <h2>Luxuory</h2>
  </div>
  <div className="curtain">
  </div>
</div>
<div className="parent">
  <div className="img">
    <img src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="img" alt="" />
  </div>
  <div className="info">
    <h3>House Interior</h3>
    <h2>Luxuory</h2>
  </div>
  <div className="curtain">
  </div>
</div>
<div className="parent">
  <div className="img">
    <img src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="img" alt="" />
  </div>
  <div className="info">
    <h3>House Interior</h3>
    <h2>Luxuory</h2>
  </div>
  <div className="curtain">
  </div>
</div>
<div className="parent">
  <div className="img">
    <img src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="img" alt="" />
  </div>
  <div className="info">
    <h3>House Interior</h3>
    <h2>Luxuory</h2>
  </div>
  <div className="curtain">
  </div>
</div>
<div className="parent">
  <div className="img">
    <img src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="img" alt="" />
  </div>
  <div className="info">
    <h3>House Interior</h3>
    <h2>Luxuory</h2>
  </div>
  <div className="curtain">
  </div>
</div>
<div className="parent">
  <div className="img">
    <img src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="img" alt="" />
  </div>
  <div className="info">
    <h3>House Interior</h3>
    <h2>Luxuory</h2>
  </div>
  <div className="curtain">
  </div>
</div>
 

      
      </Slider>
    </div>
     </div>
  );
  };