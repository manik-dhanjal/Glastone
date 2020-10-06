import React from "react"
import DivProductCard from "./div-product-card"
const SectionProductCards=()=>{
    var cardInfo = [{title:"",imgUrl:""},
                    {title:"",imgUrl:""},
                    {title:"",imgUrl:""},
                    {title:"",imgUrl:""}]
    return(
        <section class="section section-grid section_pt section_pb bg-dark color-white">
            <div class="container">
              <div class="grid grid_fluid-6 js-grid" style={{display:"flex",flexWrap:"wrap"}}>
                 {cardInfo.map(({title,imgUrl})=>(
                    <DivProductCard title={title} imgUrl={imgUrl}/>
                 ))}
              </div>
            </div> 
        </section>     
    )
}
export default SectionProductCards