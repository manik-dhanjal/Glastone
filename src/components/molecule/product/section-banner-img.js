import React from "react";
import styled from "styled-components"
import {Link} from "gatsby"
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SBanner = styled.section`
text-align:center;

.head{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-bottom:60px;
  .section__headline{
    margin-top:30px;
  }
}
.head .section__headline{
  margin-top:10px;
}
.section-masthead__text{
  max-width:500px;
}
.section-masthead__heading{
  display:flex;
  flex-direction:column;
  align-items:center;
}
.learn-btn{
  font-size:18px;
  &>svg{
    margin-left:10px;
    font-size:1em;
  }
}
`

const SectionBannerImg =({title,desc,img})=>{
    return(
        <SBanner class="section section-image section_h-800">
          <div className="  justify-content-center">
                <div className="col  head">
                  <h3 className="js-text-to-fly split-text js-split-text section-masthead__heading" >{title}  
                  <div className="section__headline" style={{background:"#CDA176"}}></div>
                  </h3>
                  
                  <p className="heading-light split-text js-split-text section-masthead__text" >{desc}</p>
                  <Link to="/" className="learn-btn">Learn More <FontAwesomeIcon icon={faAngleRight} /></Link>
                  
                </div>
              </div>
        <div className="section-image__wrapper">
          <div className=" lazy-bg"><img src={img}/></div>
        </div>
      </SBanner>
    )
}
export default SectionBannerImg;