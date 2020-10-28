import React from "react";
import Layout from "../../layout/dark-default"
import SectionMastHead from "../../components/organism/product/section-masthead"
import SectionSlider from "../../components/organism/product/section-slider"
import SectionProduct from "../../components/organism/product/section-product"
import SectionProducts from "../../components/organism/product/section-products2";
const Product=({pageContext})=>{
    const {product}=pageContext;
    return(
    <Layout>

        <SectionMastHead title={product.title} desc={product.desc}/>
        <SectionSlider imgUrl={product.sliderImg}/>
        { product.subCategory?
            product.subCategory.map(data=><SectionProduct data={data}/>):
            <SectionProducts products={product.products}/>
        }      
    </Layout>
    )
    
}

export default Product;