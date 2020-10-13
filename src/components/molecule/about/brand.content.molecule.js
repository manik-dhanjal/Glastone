import React from "react";
import styled from "styled-components";

const SContent=styled.div`
color:white;
display:flex;
justify-content:center;
flex-wrap:no-wrap;
&>div{
    width:470px;
    margin:50px 40px;
}
@media screen and (max-width:720px){
    flex-direction:column;
    &>div{
        width:100%;
        margin:0px;
        padding:30px;
    }
}
`

const Content =()=>{
    return(
        <SContent>
            <div className="sec-1">
                <p>As one can easily figure out, the name Glastone came from the very basic elements from which mosaic has originated over centuries. Glastone, with a team of 30+ years of work experience in this industry, offers an endless palette of colors, textures and materials to suit your cerebral keenness. With 300+ product combinations and a determined desire to experiment and evolve, our aim in most simple terms is customer satisfaction! </p>

                <p>With modern manufacturing facilities in Greater Noida and a team with a “learn and deliver” motto, we at Glastone have successfully executed projects across the length and breadth of India. Associated with major builders and architects, we are proud to be continually allied with some of the biggest brands and projects across India over the last 30 years.</p>

                <p>Mosaic, is a picture or pattern produced by arranging together small pieces of stone, glass, etc. However, for Glastone, it’s an accessory to your final perspectives. Mosaic, we believe, is a way of offering permanence to your ideas!</p>

                <p>For a keen soul, if we want to elaborate on the concept of mosaic, over centuries, the art of Mosaic has helped artists to convey their personal life experiences in a surreal way, thereby acting as a bridge between fantasy and reality. </p>

                <p>In routine terms, Mosaic is an artform which is made with tiny pieces of tiles, whether it be glass, stone or ceramic. As a concept, a mosaic looks like a very big jigsaw puzzle with tiles of either similar or different shapes and sizes, that conveys its true meaning only when assembled completely.</p>

                <p>When one looks at a mosaic artform from a close range, it may not make much sense, rather its beauty is unveiled only on the bigger</p>
            </div>
            <div className="sec-2">
                <p>picture. There is a saying to not judge a book by its cover, but in the case of a mosaic, the cover is the one that speaks out. </p>

                <p>There are various ways in which Glastone helps you to turn your ideas into Mosaics. A customer can choose the traditional hand cut patterns or the modern machine made or computer aided designs.</p>

                <p>The traditional hand cut method, which may be used for archaic as well as contemporary designs, take a lot of effort to be made. You may have seen these patterns in churches and museum across Europe. The artists involved in the traditional method are experienced and patient. The traditional method of mosaic art is expensive as compared to that of machine-made, but it has its own advantage and uniqueness. With hand cut designs you can get detailed outcomes irrespective of the size of the pattern. Be it a picture for your drawing room to a full building façade, hand cut designs offer excellent outcomes. </p>

                <p>Machine made designs on the other hand offer a cost effective and early to market product range and are primarily used in swimming pools, water bodies, bathrooms, kitchens, facades and elevations. Machine made mosaic chips have fixed shapes such as square, rectangular, hexagon, circle and a wide range of materials such as glass, ceramic, stone, porcelain to name a few. Using modern day technology and software, all these chips can be combined in endless combinations and patterns to turn your ideas into a material outcome. </p>

                <p>In a way, mosaic tiles can be compared to human emotions. They are musty, meddled and mixed up in the inside world, but they portray an entirely stellar and new meaning on the outside as a whole!</p>

            </div>
        </SContent>
    )
}

export default Content;