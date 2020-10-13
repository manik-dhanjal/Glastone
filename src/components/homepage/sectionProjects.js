import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from "./card"
function SampleNextArrow(props) {
  const {  style, onClick,className } = props;
  return (

    <span className="right-arrow"><FontAwesomeIcon icon={faAngleRight} style={{ ...style}} 
    onClick={onClick} /></span>
  );
}

function SamplePrevArrow(props) {
  const {style, onClick } = props;
  return (

  <span className="left-arrow">  <FontAwesomeIcon icon={faAngleLeft}  style={{ ...style}}  onClick={onClick}/> <span className="slash">/</span></span>
  );
}
export default function SectionProjects() {
 
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
  const data = useStaticQuery(graphql`
  query myQueryAndMyQueryAndMyQueryAndMyQuery {
    allWordpressPost {
      nodes {
        title
        slug
        featured_media {
          source_url
        }
        categories {
          slug
          name
        }
      }
    }
  }
`).allWordpressPost.nodes
console.log(data)
  return (
   
      <section className="section section-content section_pb-xsmall bg-dark  "style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 section-content__header">
              <div className="section-content__subheading subheading split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines"><span>OUR LATEST WORKS</span></div>
              <div className="split-text js-split-text project-head" data-split-text-type="lines" data-split-text-set="lines">
                <h3 className="project-head" >We provide the finishing touch, the final accessory to your perspectives</h3>
              </div>
            </div>
          </div>
        </div>
          <Slider {...settings}>
            {data.map((project,i)=><Card data={project} key={i}/>)}
         </Slider>
      </section>

  

  )}
  