import React from "react";
import Header from '../components/global/light-header'
import Footer from '../components/global/light-footer'
import SectionHeader from '../components/contact/section-header'
import SectionMap from '../components/contact/Section-map'
import SectionForm from '../components/contact/Section-form'
import SectionContact from '../components/contact/Section-contacts'
import SectionContacts from "../components/contact/Section-contacts";
const Contacts =()=>{
    return(
        <div data-barba="wrapper">
            <Header/>
        <div class="page-wrapper" data-barba="container">
         <main class="page-wrapper__content">
          <div class="container-fluid container_xs-no-padding">
            <SectionHeader/>
            <SectionMap/>
            <SectionForm/>
            <SectionContacts/>
           </div>
         </main>
         <Footer/> 
        </div>
        </div>
    )
}
export default Contacts;