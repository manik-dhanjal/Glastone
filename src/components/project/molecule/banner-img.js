import React from "react";
import styled from "styled-components"

const SBanner = styled.section`
& .banner{
  background-repeat:no-repeat!important;
  background-size:cover!important;
  backgound-position:center!important;
}
`
const Banner=({ImgUrl})=>{
    return(
        <SBanner className="section section-image section_w-container-right section_h-800">
            <div className="section-image__wrapper" >
              <div className="art-parallax__bg lazy-bg banner" style={{background:`url(${ImgUrl})`}} ></div>
            </div>
          </SBanner>
    )
}
export default Banner