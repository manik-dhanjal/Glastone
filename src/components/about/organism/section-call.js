import React from "react";
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionAction=()=>{
    return(
        <section class="section section-content section-cta section-image section_pt section_pb section_z-100 bg-dark-2 color-white text-center">
        <div class="section-cta__line"></div>
        <div class="section__content">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <header class="section-cta__header">
                  <h2 class="section-cta__heading">Have a Project in Mind?</h2>
                  <p>Any no each like up be is next neat. Put not enjoyment behaviour her supposing.</p>
                </header>
                <div class="section-cta__wrapper-button section-content__wrapper-button"><a class="button button_icon button_accent" href="contacts.html">
                    <div class="button__label">Let's Talk!</div>
                    <div class="button__icon"><FontAwesomeIcon icon={faAngleRight} /></div></a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-image__wrapper section-image__wrapper_absolute" data-art-parallax="background" data-art-parallax-factor="0.1">
          <div class="art-parallax__bg lazy-bg" ><img src="/img/assets/sectionBlog/img-3.jpg"/></div>
          <div class="section-image__overlay overlay overlay_dark"></div>
        </div>
      </section>
    )
}
export default  SectionAction;