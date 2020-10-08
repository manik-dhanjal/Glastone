import React from "react"
import styled from "styled-components";
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "gatsby"
const SCard=styled.div`

`

const Card =({data})=>{
    return(
        <SCard  class="swiper-slide"><Link class="figure-portfolio figure-portfolio-item_hover" to={`/project/${data.categories[0].slug}/${data.slug}`} data-pjax-link="flyingHeading">
                    <div class="figure-portfolio__wrapper-img">
                      <div class="lazy"><img  src={data.featured_media.source_url} alt width="1200" height="1800"/></div>
                      <div class="figure-portfolio__content bg-dark-3">
                          <div class="figure-portfolio__category">{data.categories[0].name}</div>
                        <div class="figure-portfolio__header">
                            <h3 class="figure-portfolio__heading split-text js-text-to-fly js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">{data.title}</h3>
                          <div class="figure-portfolio__icon material-icons"><FontAwesomeIcon icon={faAngleRight} /></div>
                        </div>
                        <div class="figure-portfolio__curtain bg-dark-3"></div>
                      </div>
                    </div>
                    </Link>
            </SCard>  
          )
}
export default Card