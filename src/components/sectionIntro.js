import React from 'react'

const SectionIntro=()=>{
    return(
        <section className="section section-intro section-masthead section-fullheight bg-dark color-white" data-os-animation="data-os-animation">
        <div className="section-masthead__inner section-intro__inner section-fullheight__inner container">
          <header className="row section-intro__header section-masthead__header">
            <div className="col-lg-6">
              <div className="subheading split-text js-split-text section-masthead__subheading section-intro__subheading" data-split-text-type="lines, words, chars" data-split-text-set="chars">Interior Design Agency</div>
              <h1 className="section-masthead__heading section-intro__heading split-text js-split-text text-xl" data-split-text-type="lines, words, chars" data-split-text-set="chars">Cassio</h1>
            </div>
            <div className="col-lg-6">
            </div>
          </header>
        </div>
        <div class="section-masthead__background section-masthead__background_fullscreen" data-art-parallax="background" data-art-parallax-factor="0.1">
              <div class="art-parallax__bg lazy-bg" src="img/assets/sectionIntro/bg-11.jpg"></div>
              <div class="overlay overlay_dark section-masthead__overlay"></div>
            </div>  
      </section>
    )
}

export default SectionIntro