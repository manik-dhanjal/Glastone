import React from "react";


const SectionContent1 =({children})=>{
    return(
        <section className="section section-content section_pt section_pb ">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-8 section-content__header section-content__header_mb">
              <div className="split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines">
                <h4>Accura Glass tiles Enterprises is a leading innovator and Manufacturer in the industry. We are passionate to build novel products by merging sophisticated tools and curiosity.</h4>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-2 section-content__content">
              <div className="section__headline section-content__headline"></div>
            </div>
            {children}
          </div>
        </div>
      </section>
    )
}
export default SectionContent1;