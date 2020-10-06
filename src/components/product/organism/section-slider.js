import React,{useEffect} from "react"
import { faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
const SectionSlider = ()=>{
    useEffect(() => {
       
      });
    var settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "15%",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      
      
      };
    return (
        <section class="section section-slider section-offset bg-accent-primary-3 section_pb-small section-offset_top">
        <div class="section-offset__content slider-container">
         
           
             <Slider {...settings}>  
              <div class="swiper" >
                <div class="slider-child" ><img className="  " src="/img/assets/project2/img-2-2.jpg"  alt/></div>
              </div>
              <div class="swiper">
                <div class="slider-child"><img className="" src="/img/assets/project2/img-2-3.jpg"  alt/></div>
              </div>
              <div class="swiper">
                <div class="slider-child"><img className="" src="/img/assets/project2/img-2-4.jpg"  alt/></div>
              </div>
             
              </Slider>
        
        </div>
   
      </section>
    )
}
export default SectionSlider;