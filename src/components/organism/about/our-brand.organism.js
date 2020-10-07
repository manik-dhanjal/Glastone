import React from "react";
import styled from "styled-components";
import Head from "../../molecule/about/brand.head.molecule"
import Content from "../../molecule/about/brand.content.molecule"
const SOurBrand=styled.section`
background:#181818;
`

const OurBrand=()=>{
    return(
        <SOurBrand>
            <Head/>
            <Content/>
        </SOurBrand>
    )
}
export default OurBrand