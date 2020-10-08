import React from "react"

const DivProductCard =({title,imgUrl})=>{
    return(
    <div class="grid__item grid__item_desktop-6 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-6  js-grid__item">
        <div class="figure-image section-image">
          <div class="lazy"><img src={imgUrl}  alt width="900" height="1350"/></div>
           <div class="section-image__caption section-image__caption-vertical-left">{title}</div>
        </div>
      </div>
    )
}
export default DivProductCard;