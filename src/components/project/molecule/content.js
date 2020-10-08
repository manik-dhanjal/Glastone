import React from "react";
import styled from "styled-components"
import parse from "html-react-parser"
const SContent=styled.section`
padding-bottom:100px;
padding-top:50px;
`

const Content = ({content})=>{
    return(
        <SContent>
            {parse(content)}
        </SContent>
    )
}
export default Content