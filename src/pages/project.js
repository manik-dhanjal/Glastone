import React from "react"
import "../dist/css/vendor.css"
import "../dist/css/main.css"
import '../dist/css/product-custom.css';
import DarkLayout from "../layout/dark-default"
import SectionMasthead from "../components/project/organism/section-masthead"
import SectionSlider from "../components/project/organism/section-slider"
import SectionProject from "../components/project/organism/section-product"
const Product = () => {
  return (
   <DarkLayout>
            <SectionMasthead/>
            <SectionSlider/>
            <SectionProject/>
  </DarkLayout>
  )
}
export default Product
