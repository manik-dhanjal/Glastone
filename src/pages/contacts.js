import React from "react";
import LightLayout from "../layout/light-default"
import SectionHeader from '../components/organism/contact/header.organism'
import Contact from "../components/organism/contact/contact.organism"
const ContactPage =()=>{
    return(
        <LightLayout>
            <SectionHeader />
            <Contact dark={false}/>
        </LightLayout>
    )
}
export default ContactPage;