import React from "react"
import SectionBanner from "../../molecule/product/section-banner-img"
import SectionProductCards from "../../molecule/product/section-product-cards"
const SectionProduct =({data})=>{
return (
    <div className="product">

        <SectionBanner title={data.title} desc={data.desc} img={data.banner}/>
        <SectionProductCards cards={data.cards}/>
    </div>
)
}
export default SectionProduct
