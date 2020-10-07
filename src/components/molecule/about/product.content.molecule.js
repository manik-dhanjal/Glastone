import React from "react"
import styled from "styled";
const SProductContent= styled.div`
`
const ProductContent = ()=>{
return(
    <SProductContent>
         <div className="row ">
            <div className="col-lg-2 section-content__content">
              <div className="section__headline section-content__headline"></div>
            </div>
            <div className="col-lg-4 section-content__content">
              <div className="section-content__subheading subheading split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines"><span>Acknowledged and exporting  our products overseas; Australia, New Zealand  and Nepal.</span></div>
            </div>
            <div className="col-lg-4 section-content__content">
              <div className="split-text js-split-text" data-split-text-type="lines" data-split-text-set="lines">
                <p>Our sound foundations are based on customer satisfaction. We create Groundbreaking Glass mosaic products  and CAD tiles by using state-of- the- art technology. Each product is passed through numerous quality parameters and dispatched after receiving the quality seal.</p>
              </div>
            </div>
          </div>
    </SProductContent>
)
}

export default ProductContent
