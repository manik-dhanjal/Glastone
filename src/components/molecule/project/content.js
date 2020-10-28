import React from "react";
import styled from "styled-components"
import parse from "html-react-parser"
const SContent=styled.section`
padding-bottom:100px;
padding-top:50px;
max-width:960px;
margin:10px auto;
@media screen and (max-width:1024px){
margin:10px 30px;
text-align:center;
}
`

const Content = ({content})=>{
    return(
        <SContent>
            {parse(content)}
        </SContent>
    )
}
export default Content