import React from 'react'

const SectionServices=()=>{
    return(
        <section className="section section-services section_minus-mt-large bg-dark-3 section_z-100" data-os-animation="data-os-animation">
        <div className="container section-services__inner">
          <div className="row">
            <div className="col-lg-4 section-services__wrapper-item">
              <div className="section-services__header">
                <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">001</div>
                <h3 className="section-services__heading split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">Interior</h3>
              </div>
              <div className="section-services__wrapper-button"><a className="link-arrow section-services__link" href="#">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons">keyboard_arrow_right</div></a></div>
              <div className="section-services__border-line" />
            </div>
            <div className="col-lg-4 section-services__wrapper-item">
              <div className="section-services__header">
                <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">002</div>
                <h3 className="section-services__heading split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">Architecture</h3>
              </div>
              <div className="section-services__wrapper-button"><a className="link-arrow section-services__link" href="#">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons">keyboard_arrow_right</div></a></div>
              <div className="section-services__border-line" />
            </div>
            <div className="col-lg-4 section-services__wrapper-item">
              <div className="section-services__header">
                <div className="section-services__counter split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">003</div>
                <h3 className="section-services__heading split-text js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">Decorations</h3>
              </div>
              <div className="section-services__wrapper-button"><a className="link-arrow section-services__link" href="#">
                  <div className="link-arrow__label">Learn more</div>
                  <div className="link-arrow__icon material-icons">keyboard_arrow_right</div></a></div>
              <div className="section-services__border-line" />
            </div>
          </div>
        </div>
        <div className="section-services__bg bg-dark-3" />
      </section>
    )
}

export default SectionServices