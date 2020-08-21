import React,{useState} from "react"
import TeamCard from "./section-team-cards"

const SectionTeam =()=>{
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

    const[team,setTeam]=useState(TeamObj);
   
return(
    <section className="section section-team section_pb bg-off-white">
    <div className="container">
      <div className="grid grid_fluid-3 js-grid team-container">
     
          {
              
          team.map(cardInfo=><TeamCard key={cardInfo.key}>{cardInfo}</TeamCard>)
          }
      </div>
    </div>
    </section>
)
}
export default SectionTeam;