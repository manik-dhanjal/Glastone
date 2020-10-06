import React from "react";
import Content from "../molecule/content"
import Banner from "../molecule/banner-img"
const SectionContent= ({ImgUrl,content})=>{

    return(
        <>
        <Banner ImgUrl={ImgUrl}/>
        <Content content={content}/>
        </>
    )
}
export default SectionContent