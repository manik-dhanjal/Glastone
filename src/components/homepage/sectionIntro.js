import React from 'react'
import posed from 'react-pose';
import SplitText from 'react-pose-text';
import styled from "styled-components"

const Intro = styled.section`
& .section-masthead__header>div{
  display:flex;
  align-items:center;
  & >.logo{
    min-width:20%;
    margin-right:20px;
    &>img{
      width:100%;
    }
  }
 .head-intro{
    h1{
      margin:0px;
      font-weight:400;
      letter-spacing:0.12em;
      font-size:clamp(32px,6vw,72px);
      white-space:nowrap;
    }
    h4{
      margin:0px;
      font-weight:400;
      letter-spacing:1.6em;
      color:white;
      line-height:1.1em;
      font-size:clamp(16px,3vw,36px);
      white-space:nowrap;
    }
  }
}
@media screen and(max-width:720px){
  & .section-masthead__header .logo{
      min-width:50px;
     
}
`
const SectionIntro=()=>{
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
     
        <Intro className="section section-intro section-masthead section-fullheight bg-dark color-white "style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
        <div className="section-masthead__inner section-intro__inner section-fullheight__inner container">
          <header className="row section-intro__header section-masthead__header">
            <div className="col-lg-6" >
              {/* <div className="subheading split-text js-split-text section-masthead__subheading section-intro__subheading" data-split-text-type="lines, words, chars" data-split-text-set="chars"><Sidebar className="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>Architects of Splended tiles</SplitText>  </Sidebar></div>
              <h1 className="section-masthead__heading section-intro__heading split-text js-split-text text-xl" data-split-text-type="lines, words, chars" data-split-text-set="chars"> <Sidebar className="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>GLASTONE</SplitText>  </Sidebar></h1> */}
              <div className="logo"><img src="/img/Logo-lg.svg"/></div>
              <div className="head-intro">
             
                  <h1><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>GLASTONE</SplitText></Sidebar></h1>
                  <h4><Sidebar class="sidebar" initialPose="exit" pose="enter"> <SplitText charPoses={charPoses}>MOSAIC</SplitText></Sidebar></h4>
               
              </div>
            </div>
           
          </header>
        </div>
        <div className="section-masthead__background section-masthead__background_fullscreen" data-art-parallax="background" data-art-parallax-factor="0.1">
        <div className="art-parallax__bg lazy-bg lazy-bg_loaded" style={{ backgroundImage: 'url("img/assets/HP1.jpg")'}} />
        <div className="overlay overlay_dark section-masthead__overlay" />
      </div>
      </Intro>
    )
}

export default SectionIntro