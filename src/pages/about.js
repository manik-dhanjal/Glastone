import React  from "react";
import '../dist/css/slider.css';
import '../dist/css/vendor.css';
import '../dist/css/main.css';
import '../dist/css/about-custom.css';
import Header from '../components/global/light-header'
import Footer from '../components/global/light-footer'
import Masthead from '../components/about/masthead'
import SectionImg1 from '../components/about/section-img-1'
import SectionContent1 from "../components/about/section-content-1";
import SectionTeam from "../components/about/section-team";
import SectionLogos from '../components/about/aside-logos';
import SectionHeader2 from '../components/about/section-header-2'
import SectionAwards from '../components/about/SectionAwards'
import SectionCall from '../components/about/section-call'


const About=()=>{
    return(
        <div data-barba="wrapper">

            <Header/>

            <div class="page-wrapper" data-barba="container">
                <main class="page-wrapper__content">
                  <div class="container-fluid container_xs-no-padding">
                      <Masthead/>
                      <SectionImg1/>
                      <SectionContent1/>
                      <SectionLogos/>
                      <SectionAwards/>
                      <SectionHeader2/>
                      <SectionTeam/>
                      <SectionCall/>
                      
                  </div>
                </main>
                <Footer/>
            </div>        
        </div>  
        )
    }


export default About;