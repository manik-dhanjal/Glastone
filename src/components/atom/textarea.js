import React from "react";
import styled from "styled-components"

const STextArea=styled.div`
& textarea{
color:white;
&:invalid {
  box-shadow: none;
}
}
`
const TextArea=({handleChange,label,errorMsg,...otherprops})=>{
  
const handleInvalid=(e)=>{
console.log(e.target);
document.querySelector(`#${otherprops.name}-error`).style.display="block";
}
const handleFocus=(e)=>{
  // input-float__input_not-empty
  if(e.type=="focus"){
    document.querySelector(`#${otherprops.name}-error`).style.display="none";
    e.target.classList.add("input-float__input_focused")
  }
  else {


    e.target.classList.remove("input-float__input_focused")
    if(e.target.value)
    {
      e.target.classList.add("input-float__input_not-empty")
    }
     else
      e.target.classList.remove("input-float__input_not-empty")
  }
}
    return(
        <STextArea>
                <div className="row form__row">
                    <div className="col form__col">
                      <label className="input-float js-input-float">
                          <textarea className='input-float__input  input-float__input_textarea' {...otherprops}  onChange={handleChange} onFocus={handleFocus} onBlur={handleFocus} onInvalid={handleInvalid}></textarea>
                          <span className="input-float__label">{label}</span>
                          <span className="form__error"></span>
                          <span id={`${otherprops.name}-error`} className="error form__error" style={{display: "none"}}>{errorMsg}</span>
                      </label>
                    </div>
                </div>
        </STextArea>
    )
}
export default TextArea