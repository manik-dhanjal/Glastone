import React from "react"
import "../dist/css/slider.css"
import "../dist/css/vendor.css"
import "../dist/css/main.css"
import "../dist/css/about-custom.css"
import SectionCall from "../components/organism/about/section-call"
import Layout from "../layout/light-default"
import OurBrand from "../components/organism/about/our-brand.organism"
import AboutHead from "../components/organism/about/about-head.organism"
import Product from "../components/organism/about/products.organism"
import Team from "../components/organism/about/team"
const About = () => {
    return (
        <Layout>
            <AboutHead/>
            <OurBrand/>
            <Product/>
            <Team/>
            <SectionCall/>

        </Layout>
    )
}

export default About
