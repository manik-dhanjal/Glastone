import React from "react"
import styled from "styled-components";
import SectionContent1 from "../../molecule/about/section-content-1"
const SProducts=styled.section`
background:white;
padding:50px 30px;
h4{
    max-width:600px;
}
.section-content{
    padding:30px 0px;
}
.section-content__content{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    .product-head{
        font-weight:600;
        font-size:18px;
        padding-bottom:10px;
    }
}
`
const Products=()=>{
    return(
        <SProducts>
           <h4>We offer genuine products, providing quality and durability. Each of our product is driven by passion and fueled with creativity.</h4>
           <SectionContent1>
            <div className="col-lg-4 section-content__content">    
            <p>       
                         <div className="product-head">Glass Mosaic</div>
                        Melody glass mosaic<br/>
                        Zircon glass mosaic<br/>
                        Pearl glass mosaic<br/>
                        Crystal glass mosaic<br/>
                </p>      
                <p>
                <div className="product-head">Stone Mosaic</div>
                </p>  
                </div>
                <div className="col-lg-4 section-content__content ">
                <p>       
                <div className="product-head">Ceramic Mosaic</div>
                        Handmade crackle mosaic<br/>
                        Porcelain crackle<br/>
                        Porcelain polished<br/>
                </p>      
                <p>
                <div className="product-head"> Designs Borders & Murals</div>
                </p>  
                </div>
           </SectionContent1>
          
        </SProducts>
    )
}

export default Products