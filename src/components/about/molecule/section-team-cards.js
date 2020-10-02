import React from "react"
import '../../../dist/css/main.css';
const TeamCard=(props)=>{
    console.log(props)
return(
    
    <div className="grid__item grid__item_desktop-4 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-3 js-grid__item">
    <div className="figure-member figure-member_has-social">
      <div className="figure-member__wrapper-img">
        <div className="figure-member__wrapper-img-inner">
          <div className="lazy grayscale"><img src={`/img/assets/avatars/${props.children.img}`}  width="300" height="450" alt/></div>
          <div className="figure-member__curtain bg-accent-secondary-4"></div>
        </div>
        <div className="figure-member__social">
          <ul className="social">
            <li className="social__item"><a className="fa fa-facebook-f" href={props.children.fb}></a></li>
            <li className="social__item"><a className="fa fa-twitter" href={props.children.twitter}></a></li>
            <li className="social__item"><a className="fa fa-instagram" href={props.children.insta}></a></li>
            <li className="social__item"><a className="fa fa-behance" href={props.children.behance}></a></li>
          </ul>
        </div>
        <div className="figure-member__line"></div>
      </div>
      <div className="figure-member__content">
        <h4 className="figure-member__heading">{props.children.name}</h4>
        <div className="figure-member__position">{props.children.postion}</div>
      </div>
    </div>
  </div>
)
}

export default TeamCard