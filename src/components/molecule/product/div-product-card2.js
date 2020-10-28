import React from "react"
import styled from "styled-components"
 

const SproductCard=styled.div`
width:80%;
max-width:380px;
cursor:pointer;
.title{
    background:#eee;
    text-align:center;
    padding:5px 0px;
    color:black;
    font-size:1.3em;
    font-weight:600;
}
@media screen and (max-width:1440px){
    max-width:320px;
}
@media screen and (max-width:1024px){
    max-width:360px;
}
`

const ProductCard=({img,handleChange,index,title})=>{
    return (
        <SproductCard>
          <div  onClick={() => handleChange(index)}>
            <div className="img-cont"><img src={img}/></div>
            <div className="title">{title}</div>
          </div>
        </SproductCard>
      );
}

export default ProductCard