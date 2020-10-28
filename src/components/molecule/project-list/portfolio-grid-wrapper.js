import React from "react";
import PortfolioGridCard from "./portfolio-grid-card"
const portfolioGridWrapper = ({projects}) =>{
 
    return(
        <div className="section-portfolio__wrapper-grid">
        <div className="container-fluid">
          <div className="grid grid_fluid-3 js-grid " style={{display:"flex",flexWrap:"wrap"}}>
           {  
             projects.map(project=> <PortfolioGridCard project={project}/>)
             
           }
          
          </div>
        </div>
      </div>
    )
}
export default portfolioGridWrapper