import React from "react"
import {graphql} from "gatsby"
import DarkLayout from "../layout/dark-default"
import SectionClients from '../components/organism/home/sectionClients'
import SectionProjects from "../components/organism/home/sectionProjects";
import SectionIntro from "../components/organism/home/sectionIntro"
import SectionServices from '../components/organism/home/sectionServices'
import SectionAbout from '../components/organism/home/sectionAbout'
import Contacts from "../components/organism/contact/contact.organism"
import "../dist/css/home-custom.css"
import { ParallaxProvider } from 'react-scroll-parallax';
const Home=({data})=>{
    return(
        <ParallaxProvider>
        
<DarkLayout>
      <SectionIntro/>
      <SectionServices/>
      <SectionAbout/>
      <SectionProjects data={data}/>
      <SectionClients/>
      <Contacts dark={true}/>
  </DarkLayout>
</ParallaxProvider>
    )
}
export const query=graphql`
query myQueryAndMyQueryAndMyQueryAndMyQuery {
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
  }
`
export default Home 


