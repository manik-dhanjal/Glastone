import React from "react"
import DivProductCard from "./div-product-card"
const SectionProductCards=({cards})=>{
    return(
        <section class="section section-grid section_pt section_pb bg-dark color-white">
            <div class="container">
              <div class="grid grid_fluid-6 js-grid" style={{display:"flex",flexWrap:"wrap"}}>
                 {cards.map(({title,ImgUrl})=>(
                    <DivProductCard title={title} imgUrl={ImgUrl}/>
                 ))}
              </div>
            </div> 
        </section>     
    )
}
export default SectionProductCards