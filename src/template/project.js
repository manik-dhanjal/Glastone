import React from "react";
import {useStaticQuery,graphql} from "gatsby"
import Layout from "../layout/light-default"
import SectionMastHead from "../components/organism/project/SectionMastHead"
import SectionContent from "../components/organism/project/SectionContent"
import NavFooter from "../components/organism/project/SectionNavFooter"
const SingleProject=({pageContext})=>{
  var {project,nextProject,prevProject}=pageContext
return(
    <Layout fullwidth={(<NavFooter nextProject={nextProject} prevProject={prevProject}/>)}>
        <SectionMastHead title={project.title} excerpt={project.excerpt} category={project.categories[0].name}/>
        <SectionContent ImgUrl={project.featured_media.source_url} content={project.content}/>
        
    </Layout >
)
}

export default SingleProject
// query($slug:String!){
//   allWordpressPost(filter: {slug: {eq:  $slug}}) {