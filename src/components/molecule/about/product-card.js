import React from "react"
import styled from "styled-components";
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "gatsby"
const SCard=styled.div`

`

const ProductCard =({data})=>{
    return(
        <SCard  className="swiper-slide"><Link className="figure-portfolio figure-portfolio-item_hover" to={`/product/${data.slug}`} data-pjax-link="flyingHeading">
                    <div className="figure-portfolio__wrapper-img">
                      <div className="lazy"><img  src={data.img}  width="1200" height="1800"/></div>
                      <div className="figure-portfolio__content bg-accent-secondary-4">
                          {/* <div className="figure-portfolio__category">{data}</div> */}
                        <div className="figure-portfolio__header">
                            <h3 className="figure-portfolio__heading split-text js-text-to-fly js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">{data.title}</h3>
                          <div className="figure-portfolio__icon material-icons"><FontAwesomeIcon icon={faAngleRight} /></div>
                        </div>
                        <div className="figure-portfolio__curtain bg-accent-secondary-4"></div>
                      </div>
                    </div>
                    </Link>
            </SCard>  
          )
}
export default ProductCard