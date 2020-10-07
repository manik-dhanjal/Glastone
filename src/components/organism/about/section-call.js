import React from "react";
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"

const SAction=styled.section`
.section-image__wrapper_absolute>div{
  background-repeat:no-repeat!important;
  background-position:center!important;
  background-size:cover!important;
}
`
const SectionAction=()=>{
    return(
        <SAction className="section section-content section-cta section-image section_pt section_pb section_z-100 bg-dark-2 color-white text-center">
        <div className="section-cta__line"></div>
        <div className="section__content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <header className="section-cta__header">
                  <h2 className="section-cta__heading">Have a Project in Mind?</h2>
                  <p>Any no each like up be is next neat. Put not<br/> enjoyment behaviour her supposing</p>
                </header>
                <div className="section-cta__wrapper-button section-content__wrapper-button"><a className="button button_icon button_accent" href="contacts.html">
                    <div className="button__label">Let's Talk!</div>
                    <div className="button__icon"><FontAwesomeIcon icon={faAngleRight} /></div></a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-image__wrapper section-image__wrapper_absolute" >
          <div className="art-parallax__bg lazy-bg" style={{background:"url(/img/assets/project2/action-banner.png) "}}></div>
        </div>
      </SAction>
    )
}
export default  SectionAction;