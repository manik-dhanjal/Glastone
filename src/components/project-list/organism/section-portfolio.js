import React, { useState ,useEffect} from "react"
import PortfolioGridWrapper from "../molecule/portfolio-grid-wrapper"
const handler =()=>{
  console.log("jgh")
}
const SectionPortfolio = () => {
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
  const [Data, setData] = useState(obj)
  const [filterCat,setFilterCat]=useState("all")
  const filterdProject = Data.filter(data=> data.category==filterCat||"all"==filterCat );
  
  return (
    <section className="section section-portfolio bg-white section_mt-small section_pb-small" >
      <div className="section-portfolio__wrapper-tabs" >
        <div className="filter js-filter bg-off-white">
          <div className="filter__inner">
           <div className="container-fluid">
              <div className="row justify-content-center">
                <div class="col-xl-auto col-12 filter__item filter__item_active js-filter__item" onClick={()=>setFilterCat("all")} data-filter="*">
                  <div>All</div>
                 </div>
               {Data.map(data=>(

                 <div class="col-xl-auto col-12 filter__item filter__item_active js-filter__item" onClick={()=>setFilterCat(data.category)} data-filter="*">
                  <div>{data.category}</div>
                 </div>

                 ))}    
               <div className="filter__underline js-filter__underline"></div>
              </div>
           </div>
         </div>
       </div>
     </div>
      <PortfolioGridWrapper projects={filterdProject} />
    </section>
  )
}
export default SectionPortfolio