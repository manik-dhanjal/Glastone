import React from "react"
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PortfolioGridCard=({title,link,img,category})=>{

    return(
        <div className="grid__item grid__item_desktop-6 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-3 js-grid__item house-interior"><a className="figure-portfolio figure-portfolio-item_hover" href={link} data-pjax-link="flyingHeading">
                <div className="figure-portfolio__wrapper-img">
                  <div className="lazy"><img src={img}  alt width="960" height="960"/></div>
                  <div className="figure-portfolio__content bg-accent-secondary-4">
                     <div className="figure-portfolio__category">{category}</div>
                    <div className="figure-portfolio__header">
    <h3 className="figure-portfolio__heading split-text js-text-to-fly js-split-text" data-split-text-type="lines, words, chars" data-split-text-set="chars">{title}</h3>
                      <div className="figure-portfolio__icon material-icons"><FontAwesomeIcon icon={faAngleRight} style={{fontSize:"20px"}}/></div>
                    </div>
                    <div className="figure-portfolio__curtain bg-accent-secondary-4"></div>
                  </div>
                </div></a>
            </div>
    )
}
export default PortfolioGridCard;