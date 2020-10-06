import React from "react"
import {graphql} from "gatsby"
import "../dist/css/vendor.css"
import "../dist/css/main.css"
import '../dist/css/product-custom.css';
import DarkLayout from "../layout/dark-default"
import SectionMasthead from "../components/project/organism/section-masthead"
import SectionSlider from "../components/project/organism/section-slider"
import SectionProject from "../components/project/organism/section-product"
const Product = ({data}) => {
  const pageData =data.allWordpressPage.nodes[0];
  return (
   <DarkLayout>
            <SectionMasthead/>
            <SectionSlider/>
            <SectionProject data={pageData}/>
  </DarkLayout>
  )
}
export default Product

export const query = graphql`
query MyQuery {
  allWordpressPage(filter: {slug: {eq: "project"}}) {
    nodes {
      title
      excerpt
      content
      slug
    }
  }
}
`