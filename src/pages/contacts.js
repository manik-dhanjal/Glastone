import React from "react";
import LightLayout from "../layout/light-default"
import SectionHeader from '../components/contact/section-header'
import SectionMap from '../components/contact/section-map'
import SectionForm from '../components/contact/section-form'
import SectionContacts from "../components/contact/section-contacts";
const Contacts =()=>{
    return(
        <LightLayout>
            <SectionHeader/>
            <SectionMap/>
            <SectionForm/>
            <SectionContacts/>
        </LightLayout>
    )
}
export default Contacts;