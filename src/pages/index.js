import React from "react"

import '../dist/css/main.css';
import '../dist/css/vendor.css';
import Header from '../components/header'
import Footer from '../components/footer'
import SectionContacts from '../components/sectionContacts'
import SectionForm from '../components/sectionForm'
import SectionMap from '../components/sectionMap'
import SectionAwards from '../components/sectionAwards'
import SectionProjects from "../components/sectionProjects";
import SectionIntro from "../components/sectionIntro"
import SectionServices from '../components/sectionServices'
import SectionAbout from '../components/sectionAbout'
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
      <section className="section section-content section_pb-xsmall bg-dark text-center" data-os-animation="data-os-animation">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 section-content__header">
              <div className="section-content__subheading subheading split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines"><span>Our latest works</span></div>
              <div className="split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines">
                <h3>We identify the essential around new visual perspectives.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* - section HEADER #1 */}
      {/* section LATEST PROJECTS */}
      <SectionProjects/>
      {/* - section HEADER #2 */}
      {/* section AWARDS */}
      <SectionAwards/>
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
