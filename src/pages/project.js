import React from "react"
import '../dist/css/project-list-custom.css';
import Layout from "../layout/light-default"
import {graphql} from "gatsby"
import SectionMasterhead from "../components/product-list/organism/section-masthead"
import SectionPortfolio from "../components/product-list/organism/section-portfolio"
 const ProjectList = ({data})=>{
    const project = data.allWordpressPost.nodes
    const categories= data.allWordpressCategory.nodes
    console.log(project,categories)
     return(
        <Layout>
             <SectionMasterhead/>
             <SectionPortfolio project={project} categories={categories}/>
        </Layout>
     )
 }
 export default ProjectList

export const query = graphql`
query myQueryAndMyQuery {
  allWordpressPost {
    nodes {
      title
      slug
      featured_media {
        source_url
      }
      categories {
        slug
        name
      }
    }
  }
  allWordpressCategory(filter: {parent_element: {slug: {eq: "project"}}}) {
    nodes {
      slug
      name
    }
  }
}

      `
    