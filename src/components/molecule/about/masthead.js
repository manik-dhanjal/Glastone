import React from "react";
import styled from "styled-components"
const SMastHead= styled.section`
.banner{
  margin-top:50px;
  object-fit:cover;
  object-position:center;
  & img{
  width:100%;
  }
}
`
const Masthead =()=>{
    return (
       <SMastHead className="section section-masthead section_pt-large text-center" >
        <div className="section-masthead__inner container">
          <header className="row section-masthead__header justify-content-center">
            <div className="col-lg-10">
              <h1 className="js-text-to-fly split-text js-split-text section-masthead__heading" data-split-text-type="lines, words, chars" data-split-text-set="chars">About</h1>
              <div className="section__headline"></div>
            </div>
          </header>
        </div>
        <div className="banner">
            <img src="/img/assets/sectionBlog/img-1.jpg"/>
        </div>
      </SMastHead>
     
    )
}
export default Masthead;

