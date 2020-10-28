import React from "react";
import styled from "styled-components";
import TeamCard from "../../molecule/about/section-team-cards"


    const TeamObj=[{ name:"Suresh Gupta",
                     postion:"Founder",
                     fb:"#",
                     insta:"#",
                     twitter:"#",
                     behance:"#",
                     img:"Suresh Gupta.jpg" ,
                     key:1
                    },
                    {
                     name:"Vipul Gupta",
                     postion:"Founder",
                     fb:"#",
                     insta:"#",
                     twitter:"#",
                     behance:"#",
                     img:"Vipul Gupta.jpg",
                     key:2 
                    },
                    ]
   
const STeam=styled.section`
padding:100px 30px;
.team-container{
    margin-top:50px;
}
.team-content{
    max-width:1020px;
    margin:10px auto;
@media screen and (max-width:720px){
    text-align:center;
}
}
.content2{
    margin-top:100px;
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


            <div className="team-content content2">
           <p> Glastone Mosaic has two state of the art manufacturing and warehousing facilities in Greater Noida, with a combined working area of approximately 13000 SFT. </p>

            <p>We have 3 gas operated furnaces which operate within the temperature range 800 to 1100 degrees and serve the purpose of manfacturing of different types of glass, ceramic and porcelain tiles. The daily production output varies from 500 to 1000 SFT depending on the type of tiles being manufactured.</p>

            <p>Glastone has always maintained strict standards of waste disposal and has designed the furnaces to optimize pollution levels, thereby trying our best towards green and environmentally sustainable operations. </p>

            <p>As a part of its CSR initiatives, Glastone tries its best to contribute to the society by conducting regular donation drives on events such as Makar Sakranti and Navratri. We also try to support our employees by bearing the education costs of their kids in case they are unable to do so. </p>

            <p>Glastone strongly believes in the principal of  Stay Together to Grow Together, and for this reason our employees have been with us for as long as 10 years and counting. </p>
              
            </div>  
            
        </div>
      </STeam>
    )
}

export default Team;