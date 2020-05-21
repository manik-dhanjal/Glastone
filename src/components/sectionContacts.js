import React from 'react'

const SectionContacts=()=>{
    return(
        <section className="section section-contacts bg-dark-2 color-white section_pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons">near_me</div>
                <div className="figure-contact__item">4575 Redbud Drive Brooklyn</div>
                <div className="figure-contact__item">NY 11206 USA</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons">phone</div>
                <div className="figure-contact__item">+1 (347) 783-92-96</div>
                <div className="figure-contact__item">+1 (347) 783-19-00</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons">mail</div>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">[email&nbsp;protected]</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SectionContacts