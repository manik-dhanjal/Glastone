import React from "react"
import styled from "styled-components"

const Masthead=styled.section`
.section__headline{
  margin-top:20px;
}
`
const SectionMasthead =({title,desc})=>{
    return (
        <Masthead className="section section-masthead text-center bg-dark color-white">
            <div className="section-masthead__inner section_pt-large section_pb container">
              <header className="row section-masthead__header justify-content-center">
                <div className="col">
                  <h1 className="js-text-to-fly split-text js-split-text section-masthead__heading" >{title}<div className="section__headline" style={{background:"#CDA176"}}></div></h1>
                  
                  <h4 className="heading-light split-text js-split-text section-masthead__text" >{desc}</h4>
                  
                </div>
              </header>
            </div>
          </Masthead>
    )
}
export default SectionMasthead