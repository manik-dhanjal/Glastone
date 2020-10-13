import React,{useState} from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter=({start=0,...otherProps})=>{
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return(
        <CountUp  start={viewPortEntered ? null : start} {...otherProps} >
        {({ countUpRef }) => {
               return (
                 <VisibilitySensor
                   active={!viewPortEntered}
                   onChange={isVisible => {
                     if (isVisible) {
                       setViewPortEntered(true);
                     }
                   }}
                   delayedCall
                 >
                   <span  ref={countUpRef} />
                 </VisibilitySensor>
               );
             }}
         </CountUp>
    )
}
export default Counter;