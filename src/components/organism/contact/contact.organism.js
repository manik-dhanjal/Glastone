import SectionMap from '../../molecule/contact/section-map.molecule'
import SectionForm from '../../molecule/contact/section-form.molecule'
import SectionContacts from "../../molecule/contact/section-contacts.molecule";
import React from "react"
const Contacts =({dark})=>{
    return(
  <>
            <SectionMap/>
            <SectionForm dark={dark}/>
           <SectionContacts dark={dark}/>
            
  </>
    )
}
export default Contacts;