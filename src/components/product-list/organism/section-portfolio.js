import React, { useState ,useEffect} from "react"
import {Link,StaticQuery} from "gatsby"
import PortfolioGridWrapper from "../molecule/portfolio-grid-wrapper"

const SectionPortfolio = ({project,categories,data}) => {
  var obj = [{
    category: "House",
    projects: [{
      title: "Luxary Touch",
      link: "/project",
      img: "/img/assets/project2/img-2-6.jpg"
    },
    {
      title: "Luxary Touch",
      link: "/project",
      img: "/img/assets/project2/img-2-6.jpg"
    }]
  },
  {
    category: "House2",

    projects: [{
      title: "Luxary Touch",
      link: "/project",
      img: "/img/assets/project2/img-2-7.jpg"
    },
    {
      title: "Luxary Touch",
      link: "/project",
      img: "/img/assets/project2/img-2-7.jpg"
    }]
  }]

const [filterdProject,setFilteredPrject]=useState(project)
const filterProject = (slug) =>{
if(slug=="all")
{
  setFilteredPrject(project);
}
else{
 setFilteredPrject( project.filter(data=>  data.categories[0].slug==slug))
}
}

  return (
    <section className="section section-portfolio bg-white section_mt-small section_pb-small" >
      <div className="section-portfolio__wrapper-tabs" >
        <div className="filter js-filter bg-off-white">
          <div className="filter__inner">
           <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-xl-auto col-12 filter__item filter__item_active js-filter__item" onClick={()=>filterProject("all")}>
                  <div>All</div>
                 </div>
               {categories.map(category=>(

                 <div class="col-xl-auto col-12 filter__item filter__item_active js-filter__item" onClick={()=>filterProject(category.slug)} >
                   {category.name}
                 </div>

                 ))}    
               <div className="filter__underline js-filter__underline"></div>
              </div>
           </div>
         </div>
       </div>
     </div>
     {console.log("vsdvsd",filterdProject)}
      <PortfolioGridWrapper projects={filterdProject} />
    </section>
  )
}
export default SectionPortfolio