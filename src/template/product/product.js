import React from "react";
import Layout from "../../layout/dark-default"
import SectionMastHead from "../../components/product/organism/section-masthead"
import SectionSlider from "../../components/product/organism/section-slider"
import SectionProduct from "../../components/product/organism/section-product"
const Product=({pageContext})=>{
    const {product}=pageContext;
    return(
    <Layout>
        <SectionMastHead title={product.title} desc={product.desc}/>
        <SectionSlider imgUrl={product.sliderImg}/>
        {product.subCategory.map(data=><SectionProduct data={data}/>)}
        
    </Layout>
    )
    
}

export default Product;