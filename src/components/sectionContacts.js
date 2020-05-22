import React from 'react'

const SectionContacts=()=>{
    return(
        <section className="section section-contacts bg-dark-2 color-white section_pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons">location</div>
                <div className="figure-contact__item">REGISTERED OFFICE: 47A GAUTAM NAGAR, NEW DELHI - 110049</div>
                <div className="figure-contact__item">WORKS: 1-7 & 1-13, SITE-C, SURAJPUR, INDUSTRIAL AREA, GREATER-NOIDA - 201306</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons">phone</div>
                <div className="figure-contact__item">+91 9625064678</div>
                <div className="figure-contact__item">+91 9810021541</div>
                <div className="figure-contact__item">+91 8810319691</div>
                <div className="figure-contact__item">+91 120 4156317</div>
            
              </div>
            </div>
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons">mail</div>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">GLASTONEMOSAIC@GMAIL.COM</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SectionContacts