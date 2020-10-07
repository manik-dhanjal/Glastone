import React from "react";
import styled from "styled-components"
import InputBox from "../../atom/input-box"
import TextArea from "../../atom/textarea"

class SectionForm extends React.Component{
constructor(props){
  super(props);
this.state={
  visitor_name:"",
  visitor_email:"",
  visitor_phone:"",
  visitor_msg:""
}

}
handleChange=(e)=>{
const {name,value}=e.target
this.setState((state,props)=>({[name]:value}));

}
render(){
  return(
    <div className={`${this.props.dark?"bg-dark-2":"bg-white"}`}>
      <section className="section section-form text-center section_pb-small section-offset_top">
        <div className="container border-radius section-offset__content bg-dark-3">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <form className="form form-contact js-ajax-form" action="https://artemsemkin.com/cassio/html/mail.php" method="POST" data-message-success="Thanks for your message! We will reply you as soon as possible." data-message-error="Something went wrong :( Please contact me directly on cassio@example.com">
                <h3 className="form__heading">Get in Touch with Us!</h3>
                <InputBox
                name="visitor_name"
                type="text"
                label="Name"
                errorMsg="Name cannot be empty"
                value={this.state.visitor_name}
                handleChange={this.handleChange}
                />
                 <InputBox 
                name="visitor_email"
                type="email"
                label="Email"
                errorMsg="Enter valid Email Address"
                value={this.state.visitor_email}
                handleChange={this.handleChange}
                />
                 <InputBox 
                name="visitor_phone"
                type="tel"
                label="Phone"
                errorMsg="Enter valid mobile number"
                value={this.state.visitor_phone}
                handleChange={this.handleChange}
                />
                <TextArea
                name="visitor_msg"
                label="Your Message"
                value={this.state.visitor_msg}
                handleChange={this.handleChange}
                />
                <div className="row form__row">
                  <div className="col form__col form__col_submit">
                    <button className="button button_solid button_accent-primary-4 button_fullwidth" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
}



export default SectionForm;