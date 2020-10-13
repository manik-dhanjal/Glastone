import React from "react"

import DarkLayout from "../layout/dark-default"
import SectionClients from '../components/homepage/sectionClients'
import SectionProjects from "../components/homepage/sectionProjects";
import SectionIntro from "../components/homepage/sectionIntro"
import SectionServices from '../components/homepage/sectionServices'
import SectionAbout from '../components/homepage/sectionAbout'
import Contacts from "../components/organism/contact/contact.organism"
import SectionMap from "../components/homepage/sectionMap"
import "../dist/css/home-custom.css"
import { ParallaxProvider } from 'react-scroll-parallax';
const Home=()=>{
    return(
        <ParallaxProvider>
        
<DarkLayout>
      <SectionIntro/>
      <SectionServices/>
      <SectionAbout/>
      <SectionProjects/>
      <SectionClients/>
      <Contacts dark={true}/>
      <SectionMap/>
  </DarkLayout>
</ParallaxProvider>
    )
}

export default Home 


