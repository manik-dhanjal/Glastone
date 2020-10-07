import React,{useEffect,useRef} from "react";
import styled from "styled-components"

const SIntputBox=styled.div`
& input{
color:white;
&:invalid {
  box-shadow: none;
}
}
`
const InputBox=({handleChange,label,errorMsg,...otherprops})=>{
  
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
        <SIntputBox>
                <div className="row form__row">
                    <div className="col form__col">
                      <label className="input-float js-input-float">
                          <input className='input-float__input error' {...otherprops} required="required" onChange={handleChange} onFocus={handleFocus} onBlur={handleFocus} onInvalid={handleInvalid}/>
                          <span class="input-float__label">{label}</span>
                          <span class="form__error"></span>
                          <span id={`${otherprops.name}-error`} className="error form__error" style={{display: "none"}}>{errorMsg}</span>
                      </label>
                    </div>
                </div>
        </SIntputBox>
    )
}
export default InputBox