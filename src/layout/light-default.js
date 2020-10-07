import React from "react";
import '../dist/css/slider.css';
import '../dist/css/vendor.css';
import '../dist/css/main.css';
import Header from '../components/global/light-header'
import Footer from '../components/global/light-footer'
const LightLayout =(Props)=>{
    return(
        <div data-barba="wrapper">
            <Header/>
        <div className="page-wrapper" data-barba="container">
         <main className="page-wrapper__content" style={{background:"#E5E5E5"}}>
          <div className="container-fluid container_xs-no-padding" >

           {Props.children}
           
           </div>
         </main>
         <Footer/> 
        </div>
        </div>
    )
}
export default LightLayout;