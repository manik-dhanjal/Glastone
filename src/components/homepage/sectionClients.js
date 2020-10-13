import React from 'react'
var brandImage=["Ashiana.png","bestech.png","cem.png","Central Park.png","Chaayos.png","chintels.png","cushman.png","dlf.png","eldeco.png","eros.png","fcml.png","grotech.png","habitat.png","indianoil.png","Intrigue Lab.png","ireo.png","jll.png","lagune.png","Microtek.png","niit.png","omaxe.png","paras.png","radission.png","rbi.png","royal.png","sapars.png","Speedo.png","stellar.png","tata.png","tulip.png"]
const SectionClient=()=>{
    return(
      <div>
       <section className="section section-content section_pb-xsmall bg-dark text-center our-clients"style={{visibility: "inherit",opacity: "1"}} data-os-animation="data-os-animation">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 section-content__header">
             
              <div className="split-text js-split-text project-head" data-split-text-type="lines" data-split-text-set="lines">
                <h3 className="project-head" >Our Clients</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="brand-logo-container container">
          {
          brandImage.map((img,i)=>
            <div className="brand-logo" key={i}>
            <img src={`/img/assets/client-logo/${img}`} alt={img}/>
            </div>
            )   
            
          }
         </div>
      </section>
      
      </div>
      
    )
}

export default SectionClient