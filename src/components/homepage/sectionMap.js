
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const SectionMap=(props)=>{
//     return(
//       <section className="section section-map bg-dark color-white">
//       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902628.3813934044!2d77.57780178908476!3d27.90528386038558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e9f7b4a09d3%3A0xf6a5476d3617249d!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1597844283111!5m2!1sen!2sin" width="100%" height="60vh" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
//       </section>
//     )
    
// }
// [{&quot;featureType&quot;:&quot;all&quot;,&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;saturation&quot;:36},{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:40}]},{&quot;featureType&quot;:&quot;all&quot;,&quot;elementType&quot;:&quot;labels.text.stroke&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;on&quot;},{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:16}]},{&quot;featureType&quot;:&quot;all&quot;,&quot;elementType&quot;:&quot;labels.icon&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylrs&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:17},{&quot;weight&quot;:1.2}]},{&quot;featureType&quot;:&quot;landscape&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;poi&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:21}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:17}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:29},{&quot;weight&quot;:0.2}]},{&quot;featureType&quot;:&quot;road.arterial&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:18}]},{&quot;featureType&quot;:&quot;road.local&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:16}]},{&quot;featureType&quot;:&quot;transit&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:19}]},{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#111111&quot;},{&quot;lightness&quot;:17}]}]
const mapStyles = {
  width:'100%',
  height:'100%'
}


    return (
     <div className="" style={{height:"50vh",position:"relative"}}> 
      <Map
        google={props.google}
        zoom={14}
        styles={props.mapStyles}

        initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      >
         <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
      </Map>
     
       </div>
    )
  }
  SectionMap.defaultProps ={mapStyles: [{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#111111"},{lightness:40}]},{featureType:"all",elementType:'labels.text.stroke',stylers:[{visibility:"on"},{color:"#111111"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#111111"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#111111"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#111111"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#111111"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#111111"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#111111"},{lightness:29},{weight:0.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#111111"},{lightness:18}]}, {featureType:"road.local",elementType:"geometry",stylers:[{color:"#111111"},{lightnes:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#111111"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#111111"},{lightness:17}]}]}
  
  
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCEvTqFfBKb45Pnv7vT1MwFR4Jdj906Kpw'
})(SectionMap);
