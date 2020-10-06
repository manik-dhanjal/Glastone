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
                <div className="add-title">Registered Office:<br/><br/></div>
                <div className="figure-contact__item add-margin" > 47A Gautam Nagar, New Delhi - 110049</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons"><FontAwesomeIcon icon={faLocationArrow} /></div>
                <div className="add-title">Correspondence Address<br/> & Manufacturing Facilities</div>
                <div className="figure-contact__item add-margin" > I-7 & I-13, Surajpur Industrial Area, Site-C, Greater Noida 201306, India</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                <div className="figure-contact__item">+91 96250 64678</div>
                <div className="figure-contact__item">+91 98100 21541</div>
                <div className="figure-contact__item">+91 88103 19691</div>
                <div className="figure-contact__item">+91 96507 89111</div>
                <div className="figure-contact__item">+91 120 4156317</div>
              </div>
            </div>
            <div className="col-lg-3" style={{padding:"0px"}}>
              <div className="figure-contact">
                <div className="figure-contact__icon material-icons"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">glastonemosiac@gmail.com</span></a></div>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">vipul.gupta@glastonemosiac.com</span></a></div>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">suresh.gupta@glastonemosaic.com</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default SectionContacts