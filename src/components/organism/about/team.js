import React from "react";
import styled from "styled-components";
import TeamCard from "../../molecule/about/section-team-cards"


    const TeamObj=[{ name:"Mark Graves",
                     postion:"Founder",
                     fb:"#",
                     insta:"#",
                     twitter:"#",
                     behance:"#",
                     img:"avatar-1.jpg" ,
                     key:1
                    },
                    {
                     name:"Cathy Porras",
                     postion:"Art Director",
                     fb:"#",
                     insta:"#",
                     twitter:"#",
                     behance:"#",
                     img:"avatar-2.jpg",
                     key:2 
                    },
                    {
                     name:"George Tailey",
                     postion:"UI / UX Designer",
                     fb:"#",
                     insta:"#",
                     twitter:"#",
                     behance:"#",
                     img:"avatar-3.jpg" ,
                     key:3
                    }]
   
const STeam=styled.section`
padding:100px 30px;
.team-container{
    margin-top:50px;
}
.team-content{
    max-width:1020px;
    margin:10px auto;
}
`
const Team=()=>{
    return(
        <STeam className="section section-content section_pt section_pb-xsmall bg-off-white">
        <div className="container">
         <div className="team-content">
            <p> Glastone was co-founded by Suresh Gupta and Vipul Gupta with an aim to offer an endless pallet of colors and textures using materials such as glass, stone and ceramics. Mosaic, as a concept is arranging of all such materials together to form a pattern. </p>

            <p>Suresh Gupta is a Civil Engineer from Kurukshetra University and has a 25 years professional experience with the Delhi Development Authority (DDA). His hands on experience and penchant for quality and fair dealing is the backbone of Glastone Mosaic. Known across the industry and having a good rapport with Architects, Builders and Contractors, Suresh's pursuit for excellence has helped Glastone Mosaic to grow leaps and bounds in the last few years.</p>

            <p>Vipul Gupta is an MBA from IMT Ghaziabad, one of the top management institutes in India and also holds a BTech degree from Kurukshetra University. He has a 6 years professional experience with global brands such as Infosys and Ranbaxy and has handled extensive profiles in both companies. His professional experience and entrepreneurial mindset has enabled him in bringing a fresh energy to Glastone and helped expand the product range and geographical reach, while improving efficiency of existing manufacturing and site operations. 
                With the motto of "learn and deliver", Suresh and Vipul are backed by a tremendous team of 30 employees in Manufacturing and Sales with a determined desire to experiment and evolve.</p>
         </div>       
           <div className="grid grid_fluid-3 js-grid team-container">
                {
                TeamObj.map(cardInfo=><TeamCard key={cardInfo.key}>{cardInfo}</TeamCard>)
                }
            </div> 
        </div>
      </STeam>
    )
}

export default Team;