import React,{useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider,{slickNext} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from "../../molecule/home/card"
class SectionProjects extends React.Component{
  constructor(props){
    super(props)

   this.slider=null;
    this.settings = {
      dots: false,
      infinite: false,
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

  }

  componentDidMount(){
    console.log(this.slider)
  }
 
  render(){
   
    
    return (
<>
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
        </section>   
        <section className="section section-portfolio section_pb bg-dark">          
          <Slider {...this.settings}  ref={c => (this.slider = c)}>
            {this.props.data.allWordpressPost.nodes.map((project,i)=><Card data={project} key={i}/>)}
            
         </Slider>
         { console.log(this.slider)}
         <div className="container-fluid arrows-cont">
           <div className="arrows">
            <span  className="left-arrow"><FontAwesomeIcon icon={faAngleLeft} onClick={()=>console.log(this.slider.slickPrev())}/></span>
            <span className="slash">/</span>
            <span  className="right-arrow"><FontAwesomeIcon icon={faAngleRight} onClick={()=>this.slider.slickNext()}/></span>
           </div> 
         </div>
      </section>
</>
  

  )
  }
}





 
  
  export default SectionProjects