import React from "react"

import DarkLayout from "../layout/dark-default"
import SectionContacts from '../components/homepage/sectionContacts'
import SectionForm from '../components/homepage/sectionForm'
import SectionMap from '../components/homepage/sectionMap'
import SectionClients from '../components/homepage/sectionClients'
import SectionProjects from "../components/homepage/sectionProjects";
import SectionIntro from "../components/homepage/sectionIntro"
import SectionServices from '../components/homepage/sectionServices'
import SectionAbout from '../components/homepage/sectionAbout'
import "../dist/css/home-custom.css"
const Home=()=>{
    return(
      
<DarkLayout>
      <SectionIntro/>
      <SectionServices/>
      <SectionAbout/>
      <SectionProjects/>
      <SectionClients/>
      <SectionMap/>
      <SectionForm/>
      <SectionContacts/>
  </DarkLayout>
    )
}

export default Home 


