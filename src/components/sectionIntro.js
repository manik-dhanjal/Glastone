import React from 'react'

const SectionIntro=()=>{
    return(
        <section className="section section-intro section-masthead section-fullheight bg-dark color-white "style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
        <div className="section-masthead__inner section-intro__inner section-fullheight__inner container">
          <header className="row section-intro__header section-masthead__header">
            <div className="col-lg-6" >
              <div className="subheading split-text js-split-text section-masthead__subheading section-intro__subheading" data-split-text-type="lines, words, chars" data-split-text-set="chars">MOSAICS BY</div>
              <h1 className="section-masthead__heading section-intro__heading split-text js-split-text text-xl" data-split-text-type="lines, words, chars" data-split-text-set="chars">GLASTONE</h1>
            </div>
            <div className="col-lg-6">
            </div>
          </header>
        </div>
        <div className="section-masthead__background section-masthead__background_fullscreen" data-art-parallax="background" data-art-parallax-factor="0.1">
        <div className="art-parallax__bg lazy-bg lazy-bg_loaded" style={{transform: 'translate(0%, -3.77468%) matrix3d(1.1, 5.97587e-05, 0, 0, -5.97587e-05, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', backgroundImage: 'url("img/assets/HP1.jpg")', transformOrigin: 'center center 0px'}} />
        <div className="overlay overlay_dark section-masthead__overlay" />
      </div>
      </section>
    )
}

export default SectionIntro