import React from "react";
import {useStaticQuery,graphql} from "gatsby"
import Layout from "../layout/light-default"
import SectionMastHead from "../components/project/organism/SectionMastHead"
import SectionContent from "../components/project/organism/SectionContent"
const SingleProject=({pageContext})=>{
  var {project}=pageContext

return(
    <Layout>
        <SectionMastHead title={project.title} excerpt={project.excerpt} category={project.categories[0].name}/>
        <SectionContent ImgUrl={project.featured_media.source_url} content={project.content}/>
    </Layout>
)
}

export default SingleProject
// query($slug:String!){
//   allWordpressPost(filter: {slug: {eq:  $slug}}) {