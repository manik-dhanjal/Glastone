import React from 'react'
import {Link} from "gatsby"
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SplitText from 'react-pose-text';
import posed from 'react-pose';
import styled from "styled-components"
const SServices= styled.section`
position:relative;
top:-95px;
left:0;
& .section-services__link{
  color:white!important;
}
h4.section-services__heading {
  margin-top:10px;
margin-bottom:5px;
}
@media screen and (max-width:1200px){
  h4.section-services__heading {
    margin-top:0px;
   }
}
`
const SectionServices=()=>{
  const Sidebar = posed.div({
    exit: {
      x: '-100%'
    },
    enter: {
      x: '0%',
      beforeChildren: true,
      staggerChildren: 50
    }
  });
  
  const charPoses = {
    exit: { opacity: 0 },
    enter: { opacity: 1 }
  };
    return(
        <SServices className="section section-services  bg-dark-3 section_z-100" style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
        <div className="container section-services__inner">
          <div className="row">
            <div className="col-lg-6 col-xl-3  section-services__wrapper-item">
              <div className="section-services__header">
                {/* <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Quality</SplitText>  </Sidebar></div> */}
                <h4 className="section-services__heading split-text js-split-text"><Sidebar className="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Glass Mosaics</SplitText>  </Sidebar></h4>
              </div>
              <div className="section-services__wrapper-button"><Link className="link-arrow section-services__link" to="/product/glass-mosaics">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons"><FontAwesomeIcon icon={faAngleRight} /></div></Link></div>
              <div className="section-services__border-line" />
            </div>
            <div className="col-lg-6 col-xl-3  section-services__wrapper-item">
              <div className="section-services__header">
                {/* <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Durability</SplitText>  </Sidebar></div> */}
                <h4 className="section-services__heading split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar className="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Ceramic Mosaics</SplitText></Sidebar></h4>
              </div>
              <div className="section-services__wrapper-button"><Link className="link-arrow section-services__link" to="/product/ceramic-mosaics">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons"><FontAwesomeIcon icon={faAngleRight} /></div></Link></div>
              <div className="section-services__border-line" />
            </div>
            <div className="col-lg-6 col-xl-3 section-services__wrapper-item">
              <div className="section-services__header">
                {/* <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Punctuality</SplitText>  </Sidebar></div> */}
                <h4 className="section-services__heading split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar className="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Stone Mosaics</SplitText>  </Sidebar></h4>
              </div>
              <div className="section-services__wrapper-button"><Link className="link-arrow section-services__link" to="/product/stone-mosaic">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons"><FontAwesomeIcon icon={faAngleRight} /></div></Link></div>
              <div className="section-services__border-line" />
            </div>
            
            <div className="col-lg-6 col-xl-3 section-services__wrapper-item">
              <div className="section-services__header">
                {/* <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Punctuality</SplitText>  </Sidebar></div> */}
                <h4 className="section-services__heading split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar className="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Borders & Murals</SplitText>  </Sidebar></h4>
              </div>
              <div className="section-services__wrapper-button"><Link className="link-arrow section-services__link" to="/product/stone-mosaic">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons"><FontAwesomeIcon icon={faAngleRight} /></div></Link></div>
              <div className="section-services__border-line" />
            </div>
          </div>
        </div>
        <div className="section-services__bg bg-dark-3" />
      </SServices>
    )
}

export default SectionServices