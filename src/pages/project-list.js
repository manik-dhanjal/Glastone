import React from "react"
import '../dist/css/project-list-custom.css';
import Layout from "../layout/light-default"
import SectionMasterhead from "../components/project-list/organism/section-masthead"
import SectionPortfolio from "../components/project-list/organism/section-portfolio"
 const ProjectList = ()=>{
     return(
        <Layout>
             <SectionMasterhead/>
             <SectionPortfolio/>
        </Layout>
     )
 }
 export default ProjectList