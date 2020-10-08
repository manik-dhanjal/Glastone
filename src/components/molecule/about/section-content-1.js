import React from "react";


const SectionContent1 =({children})=>{
    return(
        <section className="section section-content section_pt section_pb ">
        <div className="container">
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