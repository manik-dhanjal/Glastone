import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductCard from "../../molecule/about/product-card"
function SampleNextArrow(props) {
  const {  style, onClick,className } = props;
  return (

    <span className="right-arrow" style={{color:"rgb(197, 158, 114)"}}><FontAwesomeIcon icon={faAngleRight} style={{ ...style}} 
    onClick={onClick} /></span>
  );
}

function SamplePrevArrow(props) {
  const {style, onClick } = props;
  return (

  <span className="left-arrow" style={{color:"rgb(197, 158, 114)"}}>  <FontAwesomeIcon icon={faAngleLeft}  style={{ ...style}}  onClick={onClick}/> <span className="slash">/</span></span>
  );
}

const data=[
    {
        img:"/img/assets/about/product/img1.jpg",
        title:"Glass Mosaics",
        slug:"glass-mosaics"
    },
    {
        img:"/img/assets/about/product/img2.jpg",
        title:"Ceramic Mosaics",
        slug:"ceramic-mosaics"
    },
    {
        img:"/img/assets/about/product/img3.jpg",
        title:"Stone Mosaics",
        slug:"stone-mosaics"
    },
    {
        img:"/img/assets/about/product/img4.jpg",
        title:"Mosaic Blend",
        slug:"mosaic-blend"
    },
]

export default function SectionProducts() {
 
  var settings = {
    dots: false,
    infinite: false,
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
   
      <section className="section section-content section_pb-xsmall bg-light  "style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
          <Slider {...settings}>
            {data.map((project,i)=><ProductCard data={project} key={i}/>)}
         </Slider>
      </section>

  

  )}