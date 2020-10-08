import React from "react"

const SectionMasthead =({title,desc})=>{
    return (
        <section className="section section-masthead text-center bg-dark color-white">
            <div className="section-masthead__inner section_pt-large section_pb container">
              <header className="row section-masthead__header justify-content-center">
                <div className="col">
                  <h1 className="js-text-to-fly split-text js-split-text section-masthead__heading" >{title}</h1>
                  <h4 className="heading-light split-text js-split-text section-masthead__text" >{desc}</h4>
                  <div className="section__headline" style={{background:"#CDA176"}}></div>
                </div>
              </header>
            </div>
          </section>
    )
}
export default SectionMasthead