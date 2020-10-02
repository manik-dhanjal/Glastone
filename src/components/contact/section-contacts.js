import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt ,faEnvelope,faLocationArrow} from '@fortawesome/free-solid-svg-icons'
const SectionContacts =()=>{
    return(
        <section className="section section-contacts bg-white section_pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons"><FontAwesomeIcon icon={faLocationArrow} /></div>
                <div className="add-title">Registered Office:</div>
                <div className="figure-contact__item add-margin" > 47A Gautam Nagar, New Delhi - 110049</div>
                <div className="add-title">Works:</div>
                <div className="figure-contact__item"> 1-7 & 1-13, Site-C, Surajpur, Industrial Area, Greater-Noida - 201306</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                <div className="figure-contact__item">+91 9625064678</div>
                <div className="figure-contact__item">+91 9810021541</div>
                <div className="figure-contact__item">+91 8810319691</div>
                <div className="figure-contact__item">+91 120 4156317</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">glastonemosiac@gmail.com</span></a></div>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">vipul.gupta@glastonemosiac.com</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default SectionContacts