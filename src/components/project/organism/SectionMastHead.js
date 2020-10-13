import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

const SMasthead= styled.section`
.section-masthead__text{
    color:#181818;
}
.content>*{
    text-align:center;
}
.section__headline{
    margin-left:auto;
}
`
const SectionMastHead=({category,title,excerpt})=>{
  
    return(
    <SMasthead className="section section-masthead section_pt-large section_pb-small text-left " >
        <div className="section-masthead__inner container-fluid">
        <header className="row section-masthead__header justify-content-center">
            <div className="col mw-720 content">
            <div className="subheading split-text js-split-text section-masthead__subheading">{category}</div>
            <h1 className="js-text-to-fly split-text js-split-text section-masthead__heading">{title}</h1>
            <h4 className="heading-light split-text js-split-text section-masthead__text">{parse(excerpt)}</h4>
            <div className="section__headline"></div>
            </div>
        </header>
        </div>
    </SMasthead>
    )
 
}
export default SectionMastHead