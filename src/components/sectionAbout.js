import React from 'react'

const SectionAbout=()=>{
    return (
      <section className="section section-about section_minus-mt section_pt-xlarge section_pb bg-dark color-white overflow">
        <div className="container-fluid no-gutters">
          <div className="row no-gutters">
            <div className="col-lg-6 section-about__content order-lg-2">
              <header className="section-about__header">
                
                <h2 className="section-about__heading" style={{backgroundColor:'#333333',fontSize:'30px'}}>
                <div className="section__headline section-about__headline" />
                We are creators and Architects of Opulent state-of-the-art tiles. Our tiles represent the sound foundation of our customer satisfaction.
</h2>
                <div className="section-about__decor bg-dots" data-art-parallax="element" data-art-parallax-y="25%" />
              </header>
              <div className="section-about__wrapper-content">
                <div className="row">
                  <div className="col-sm-6 section-about__wrapper-counter">
                    <div className="counter js-counter" data-counter-start={0} data-counter-target={6} data-counter-duration={4}>
                      <div className="counter__number text-xl js-counter__number">30+</div>
                      <div className="counter__label">Years Experience</div>
                    </div>
                  </div>
                  <div className="col-sm-6 section-about__wrapper-counter">
                    <div className="counter js-counter" data-counter-start={0} data-counter-target={43} data-counter-duration={4}>
                      <div className="counter__number text-xl js-counter__number">400+</div>
                      <div className="counter__label">Retail And Corporate Clients</div>
                    </div>
                  </div>
                  <div className="col-sm-6 section-about__wrapper-counter">
                    <div className="counter js-counter" data-counter-start={0} data-counter-target={12} data-counter-duration={4}>
                      <div className="counter__number text-xl js-counter__number">300+</div>
                      <div className="counter__label">SKUs</div>
                    </div>
                  </div>
                  <div className="col-sm-6 section-about__wrapper-counter">
                    <div className="counter js-counter" data-counter-start={0} data-counter-target={57} data-counter-duration={4}>
                      <div className="counter__number text-xl js-counter__number">200+</div>
                      <div className="counter__label">Successfull Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 section-about__wrapper-img order-lg-1">
              <div data-art-parallax="image" data-art-parallax-factor="-0.1">
                <div className="lazy"><img src="/img/assets/HP2.jpg" alt width={1280} height={1580} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SectionAbout