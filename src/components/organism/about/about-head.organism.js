import React from "react";
import Masthead from "../../molecule/about/masthead"
import SectionContent1 from "../../molecule/about/section-content-1"

const AboutHead =()=>{
    return(
       <>
            <Masthead />
            <SectionContent1>
            <div className="col-lg-4 section-content__content">
              <div className="section-content__subheading subheading split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines"><span>Acknowledged and exporting  our products overseas; Australia, New Zealand  and Nepal.</span></div>
            </div>
            <div className="col-lg-4 section-content__content">
                <p>Our sound foundations are based on customer satisfaction. We create Groundbreaking Glass mosaic products  and CAD tiles by using state-of- the- art technology. Each product is passed through numerous quality parameters and dispatched after receiving the quality seal.</p>
            </div>
            </SectionContent1>
        </>
    )
}

export default AboutHead