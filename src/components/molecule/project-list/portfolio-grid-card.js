import React from "react"
import {Link} from "gatsby"
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PortfolioGridCard=({project})=>{

    return(
        <div className="grid__item grid__item_desktop-6 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-3 js-grid__item house-interior"><Link className="figure-portfolio figure-portfolio-item_hover" to={"/project/"+project.categories[0].slug+"/"+project.slug} data-pjax-link="flyingHeading">
                <div className="figure-portfolio__wrapper-img">
                  <div className="lazy"><img src={project.featured_media.source_url}  alt width="960" height="960"/></div>
                  <div className="figure-portfolio__content bg-accent-secondary-4">
                     <div className="figure-portfolio__category">{project.categories[0].name}</div>
                    <div className="figure-portfolio__header">
    <h3 className="figure-portfolio__heading split-text js-text-to-fly js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">{project.title}</h3>
                      <div className="figure-portfolio__icon material-icons"><FontAwesomeIcon icon={faAngleRight} style={{fontSize:"20px"}}/></div>
                    </div>
                    <div className="figure-portfolio__curtain bg-accent-secondary-4"></div>
                  </div>
                </div></Link>
            </div>
    )
}
export default PortfolioGridCard;