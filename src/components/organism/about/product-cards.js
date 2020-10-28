import React,{useRef} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductCard from "../../molecule/about/product-card"
import styled from "styled-components"

const SSlider=styled.section`
.arrows{
  font-size:30px;
  color:rgb(197, 158, 114);
}
.slash{
  font-size:1.2em;
}
.left-arrow,.right-arrow{
  cursor:pointer;
}
`
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
  var slider=useRef(null)
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows:false,
    centerPadding:0,
   
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
   
      <SSlider className="section section-content section_pb-xsmall bg-light  "style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
          <Slider {...settings} ref={c => (slider = c)}>
            {data.map((project,i)=><ProductCard data={project} key={i}/>)}
         </Slider>
         <div className="container-fluid arrows-cont">
           <div className="arrows">
            <span  className="left-arrow"><FontAwesomeIcon icon={faAngleLeft} onClick={()=>slider.slickPrev()}/></span>
            <span className="slash">/</span>
            <span  className="right-arrow"><FontAwesomeIcon icon={faAngleRight} onClick={()=>slider.slickNext()}/></span>
           </div> 
         </div>
      </SSlider>

  

  )}