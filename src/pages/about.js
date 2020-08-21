import React  from "react";
import Header from '../components/global/light-header'
import Masthead from '../components/about/masthead'
import SectionImg1 from '../components/about/section-img-1'
import SectionContent1 from "../components/about/section-content-1";
import '../dist/css/slider.css';
import '../dist/css/vendor.css';
import '../dist/css/main.css';

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
                  </div>
                </main>
            </div>        
        </div>  
        )
    }


export default About;