import React from "react"

import DarkLayout from "../layout/dark-default"
import SectionClients from '../components/homepage/sectionClients'
import SectionProjects from "../components/homepage/sectionProjects";
import SectionIntro from "../components/homepage/sectionIntro"
import SectionServices from '../components/homepage/sectionServices'
import SectionAbout from '../components/homepage/sectionAbout'
import Contacts from "../components/organism/contact/contact.organism"
import "../dist/css/home-custom.css"
const Home=()=>{
    return(
      
<DarkLayout>
      <SectionIntro/>
      <SectionServices/>
      <SectionAbout/>
      <SectionProjects/>
      <SectionClients/>
      <Contacts dark={true}/>
  </DarkLayout>
    )
}

export default Home 


