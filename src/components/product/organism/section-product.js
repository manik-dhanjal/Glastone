import React from "react"
import SectionBanner from "../molecule/section-banner-img"
import SectionProductCards from "../molecule/section-product-cards"
const SectionProduct =({data})=>{
return (
    <div className="product">

        <SectionBanner title={data.title} desc={data.desc} img={data.banner}/>
        <SectionProductCards cards={data.cards}/>
    </div>
)
}
export default SectionProduct
