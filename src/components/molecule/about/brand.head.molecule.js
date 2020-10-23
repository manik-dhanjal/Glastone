import React from "react";
import styled from "styled-components";

const SHead=styled.div`
padding:30px 0px;
h2{
    text-align:center;
    margin-top:30px;
    margin-bottom:50px;
}
.banner-img{
    object-fit:cover;
    overflow:hidden;
img{
    width:100%;
}
}
`

const Head =()=>{
    return(
        <SHead>
            <h2>Our Brand</h2>
            <div className="banner-img"><img src="/img/assets/about/Brand Banner.png"/></div>
        </SHead>
    )
}

export default Head;