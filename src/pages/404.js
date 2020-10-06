import React from "react";
import Layout from "../layout/dark-default";
import styled from "styled-components"

const SNotFound=styled.section`
padding-top:10%;
background:#333;
height:100vh;
`
const NotFound=()=>{
    return(

        <Layout>
            <SNotFound className="wrapper">
                <h1>Page Not Found</h1>
            </SNotFound>
        </Layout>
    )
}

export default NotFound;