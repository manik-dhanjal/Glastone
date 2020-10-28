import React from "react";
import styled from "styled-components"

const Section = styled.section`
@media screen and (max-width:720px){
  text-align:center;
  .section__headline{
    margin-left:auto;
    margin-right:auto;
  }
}
`

const SectionContent1 =({children})=>{
    return(
        <Section className="section section-content section_pt section_pb ">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 section-content__content">
              <div className="section__headline section-content__headline"></div>
            </div>
            {children}
          </div>
        </div>
      </Section>
    )
}
export default SectionContent1;