import React from "react"
import "../dist/css/slider.css"
import "../dist/css/vendor.css"
import "../dist/css/main.css"
import "../dist/css/about-custom.css"
import Masthead from "../components/about/organism/masthead"
import SectionImg1 from "../components/about/organism/section-img-1"
import SectionContent1 from "../components/about/organism/section-content-1"
import SectionTeam from "../components/about/organism/section-team"
import SectionLogos from "../components/about/organism/aside-logos"
import SectionHeader2 from "../components/about/organism/section-header-2"
import SectionAwards from "../components/about/organism/SectionAwards"
import SectionCall from "../components/about/organism/section-call"
import Layout from "../layout/light-default"

const About = () => {
    return (
        <Layout>
            <Masthead />
            <SectionImg1 />
            <SectionContent1 />
            <SectionLogos />
            <SectionAwards />
            <SectionHeader2 />
            <SectionTeam />
            <SectionCall />
        </Layout>
    )
}

export default About
