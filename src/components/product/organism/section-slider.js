import React,{useEffect} from "react"
import gsap,{TimelineMax} from "gsap"
import styled from "styled-components"
import { faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SSlider=styled.div`
margin-bottom:100px;
margin-top:100px;
.slide-static{
  display:inline-flex;
  width:100%;
  margin-top:-10%;
  overflow:hidden;
}
.slider-frame{
  display:inline-flex;
 & .slide-cont{
    width:75vw;
    object-fit:cover;
    padding-right:5vw;
    & .img{
      width:100%;
    }
  }
}


.controls{
  padding:30px;
  display:grid;
  grid-template-columns:1fr  1fr;
  align-items:center;

}
.slash{
  font-size:2.5rem;
  font-weight:300;
  transform:rotateZ(10deg);
  padding:0px;
}
.slide-num{
  justify-self:flex-end;
  display:flex;
  align-items:center;
  overflow:hidden;
  height:2.1em;
  &>div{
    padding:0px 15px;
  }
  & .current-num{
    align-self:start;
  }
}
.arrows{
  display:flex;
  align-items:center;
&>div{
  margin:0px 20px;
  padding:0 5px;
  cursor:pointer;
  font-size:1.5em;
}
}

@media screen and (max-width:720px){
.slash{
  font-size:1.5em;
 
}



  .controls{
  font-size:12px;
  padding:15px 0px;
  }
  
}

`

const SectionSlider = ({imgUrl})=>{

    return (
        <section class="section section-slider section-offset bg-accent-primary-3 section_pb-small section-offset_top">
           <Slider >  
             {imgUrl.map(url=>(
              <div className="slide-cont" >
               <img  src={url}  alt/>
             </div>
             ))}
           
             
            </Slider>
      </section>
    )
}
export default SectionSlider;



class Slider extends React.Component{
  constructor(props){
    super(props)
    this.width=null
    this.slideFrame=null
    this.num=null
    this.activeNum=null
    this.totalNum=null
    this.slide=null;
    this.slideFrame=null
    this.state={
      activeSlide:0,
      prevSlide:0,
      width:null,
      numWidth:null
    }
  }

  componentDidMount(){
    this.slide=document.querySelectorAll(".slide-cont")
    this.num=this.slide.length;
    for(var i=1;i<=this.num;i++){
      this.activeNum.innerHTML+=`<div className="child">${('000' + i).slice(-3)}</div>`
    }
    this.numslide=document.querySelectorAll(".current-num>div")  

  this.setState({width:this.slide[0].clientWidth,numWidth:this.numslide[0].clientHeight})

  window.addEventListener('resize',(e)=>{
    this.setState({width:this.slide[0].clientWidth,numWidth:this.numslide[0].clientHeight})
    console.log(e)
  })
  this.slideFrame.addEventListener("transitionend",()=>{
    this.slideFrame.style.transition="none";
    this.activeNum.style.transition="none"
  })
  }
  componentDidUpdate(){
    this.slideFrame.style.transition="0.7s ease-in-out all"
    this.activeNum.style.transition="0.7s ease-in-out all"
    this.slideFrame.style.transform=`translateX(calc( -${this.state.activeSlide*this.state.width}px + 10vw))`
    this.activeNum.style.transform=`translateY(-${this.state.activeSlide*this.state.numWidth}px)`
    
  }
  componentWillUnmount(){
    window.removeEventListener('resize',()=>{
 
    })
    this.slideFrame.removeEventListener("transitionend",()=>{
    })
  }

  handleMoveleft=(e)=>{
    this.setState((state, props) => ({
      prevSlide:state.activeSlide,
      activeSlide:(0<state.activeSlide?state.activeSlide-1:this.num-1)
    }));
  }
  handleMoveright=(e)=>{
    this.setState((state, props) => ({
      prevSlide:state.activeSlide,
      activeSlide:(this.num-1>state.activeSlide?state.activeSlide+1:0)
    }));
  }
  render(){
    return(
      <SSlider class="section-offset__content slider-container">
      <div className="slide-static" ref={div=>this.slideStatic=div}>  
        <div className="slider-frame" ref={div=>this.slideFrame=div}>
          {this.props.children}
        </div>
      </div>
      <div className="controls">
        <div className="arrows">
          <div className="arrow-left " id="back"onClick={this.handleMoveleft}><FontAwesomeIcon icon={faAngleLeft} /></div> <span className="slash">/</span>
          <div className="arrow-right" id="for" onClick={this.handleMoveright}><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>
        <div className="slide-num">
          <div className="current-num" ref={div=>this.activeNum=div}>
          
          </div>
            <span className="slash">/</span>
          <div className="total-num" >{ ('000' + this.num).slice(-3) }</div>
        </div>
      </div>
    </SSlider>
    )

  }
}
