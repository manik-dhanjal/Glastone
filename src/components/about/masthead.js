import React from "react";


const Masthead =()=>{
    return (
       <section className="section section-masthead section_pt-large text-center" >
        <div className="section-masthead__inner container">
          <header className="row section-masthead__header justify-content-center">
            <div className="col-lg-10">
              <h1 className="js-text-to-fly split-text js-split-text section-masthead__heading" data-split-text-type="lines, words, chars" data-split-text-set="chars">About</h1>
              <div className="section__headline"></div>
            </div>
          </header>
        </div>
      </section>
     
    )
}
export default Masthead;