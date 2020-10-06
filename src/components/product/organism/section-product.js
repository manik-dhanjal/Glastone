import React from "react"
import SectionDesc from "../molecule/section-desc"
import SectionBanner from "../molecule/section-banner-img"
import SectionProductCards from "../molecule/section-product-cards"
const SectionProduct =({data})=>{
return (
    <div className="product">
        <SectionDesc data={data}/>

        {/* <SectionBanner/>
        <SectionProductCards/> */}
    </div>
)
}
export default SectionProduct
