import React from "react"

import '../dist/css/slider.css';
import '../dist/css/vendor.css';
import '../dist/css/home-custom.css';
import '../dist/css/main.css';
import Header from '../components/global/dark-header'
import Footer from '../components/global/dark-footer'
import SectionContacts from '../components/homepage/sectionContacts'
import SectionForm from '../components/homepage/sectionForm'
import SectionMap from '../components/homepage/sectionMap'
import SectionClients from '../components/homepage/sectionClients'
import SectionProjects from "../components/homepage/sectionProjects";
import SectionIntro from "../components/homepage/sectionIntro"
import SectionServices from '../components/homepage/sectionServices'
import SectionAbout from '../components/homepage/sectionAbout'
const Home=()=>{
    return(
        <div>
            <div data-barba="wrapper">
  {/* PAGE PRELOADER */}
  {/* <div className="preloader js-preloader">
    <div className="preloader__curtain preloader__curtain_outer bg-dark" />
    <div className="preloader__content">
      <div className="preloader__curtain preloader__curtain_inner bg-accent-primary-1" />
      <div className="preloader__wrapper-logo"><a className="logo" href="homepage-slider-4.html">
          <div className="logo__text"><span className="logo__text-title">Cassio</span></div></a>
      </div>
    </div>
  </div> */}
  {/* - PAGE PRELOADER */}
  {/* PAGE HEADER */}
  <Header/>

  {/* - PAGE HEADER */}
  <div className="page-wrapper bg-dark color-white" data-barba="container">
    <main className="page-wrapper__content">
      {/* section INTRO */}
      <SectionIntro/>
      {/* - section INTRO */}
      {/* section SERVICES */}
      <SectionServices/>
      {/* - section SERVICES */}
      {/* section ABOUT */}
      <SectionAbout/>
      {/* - section ABOUT */}
      {/* section HEADER #1 */}
      
      {/* - section HEADER #1 */}
      {/* section LATEST PROJECTS */}
      <SectionProjects/>
      {/* - section HEADER #2 */}
      {/* section AWARDS */}
      <SectionClients/>
      {/* - section AWARDS */}
      {/* section MAP */}
      <SectionMap/>
      {/* - section MAP */}
      {/* section FORM */}
      <SectionForm/>
      {/* - section FORM */}
      {/* section CONTACTS */}
      
      {/* - section CONTACTS */}
    </main>
    
  </div>
  <div className="transition-curtain bg-dark-2" />
  <canvas id="js-webgl" />
</div>

<SectionContacts/>

<Footer/>


        </div>
    )
}

export default Home 


