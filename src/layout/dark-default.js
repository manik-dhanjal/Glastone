import React from "react"

import '../dist/css/slider.css';
import '../dist/css/vendor.css';
import '../dist/css/main.css';
import Header from '../components/global/dark-header'
import Footer from '../components/global/dark-footer'

const DarkLayout=(props)=>{
    return(
        <div>
            <div data-barba="wrapper">
 
  <Header/>


  <div className="page-wrapper bg-dark color-white" data-barba="container">
    <main className="page-wrapper__content">
        {props.children}
   
    </main>
    
  </div>
  <div className="transition-curtain bg-dark-2" />
  <canvas id="js-webgl" />
</div>



<Footer/>


        </div>
    )
}

export default DarkLayout 


