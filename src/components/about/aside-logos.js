import React from "react"
var brandImage=["Ashiana.png","bestech.png","cem.png","Central Park.png","Chaayos.png","chintels.png","cushman.png","dlf.png"]
const SectionLogos =()=>{
    return (
        <aside class="section aside aside-logos section_pt-xsmall section_pb-xsmall bg-accent-primary-3">
        <div class="container">
          <div class="row justify-content-between align-items-center text-center">
          {
          brandImage.map(img=>
            <div class="col-lg-3 col-md-4 col-sm-6 aside-logos__wrapper-logo">
              <img src={`/img/assets/client-logo/${img}`} alt={img} alt width="324" height="200" style={{transform:"none"}}/>
            </div>
            )  
            
          }
            
          </div>
        </div>
      </aside>
   )
}
export default SectionLogos;