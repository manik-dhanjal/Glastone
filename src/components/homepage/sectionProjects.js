import React,{ useState } from "react"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",left:"150px",top:"110%",zIndex:"60"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left:"80px",top:"110%",zIndex:"60"}}
      onClick={onClick}
    />
  );
}
export default function SectionProjects() {
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    arrows:true,
    centerPadding:0,
   
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
          <section className="section section-content section_pb-xsmall bg-dark text-center "style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 section-content__header">
              <div className="section-content__subheading subheading split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines"><span>Our Product Range
</span></div>
              <div className="split-text js-split-text project-head" data-split-text-type="lines" data-split-text-set="lines">
                <h3 className="project-head" >We design Cutting edge products by <br/>bending imagination into reality.
</h3>
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
    <h3>House Interior1</h3>
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
    <h3>House Interior2</h3>
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
    <h3>House Interior3</h3>
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
    <h3>House Interior4</h3>
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
    <h3>House Interior5</h3>
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
    <h3>House Interior6</h3>
    <h2>Luxuory</h2>
  </div>
  <div className="curtain">
  </div>
</div>
 

      
      </Slider>
 
    </div> 

  )}
  