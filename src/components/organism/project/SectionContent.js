import React from "react";
import Content from "../../molecule/project/content"
import Banner from "../../molecule/project/banner-img"
const SectionContent= ({ImgUrl,content})=>{

    return(
        <>
        <Banner ImgUrl={ImgUrl}/>
        <Content content={content}/>
        </>
    )
}
export default SectionContent