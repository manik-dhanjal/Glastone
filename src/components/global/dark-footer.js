import React from 'react'
import '../../dist/css/main.css'

const Footer=()=>{
return(
    <footer className="footer container-fluid bg-dark">
      <div className="footer__area-primary">
        <div className="footer__row row">
          <div className="col-lg-4 text-left footer__column">
            <section className="widget widget_cassio_logo"><a className="logo" href="homepage-slider-4.html">
                <div className="logo__text"><span className="logo__text-title">ABOUT US</span></div></a>
              <p className=" text-white">Mosiacs By Glastone</p>
            </section>
          </div>
          <div className="col-lg-4 text-center footer__column">
            <section className="widget widget_cassio_social">
              <ul className="social">
                <li className="social__item"><a className="fa fa-facebook-f" href="#" /></li>
                <li className="social__item"><a className="fa fa-twitter" href="#" /></li>
                <li className="social__item"><a className="fa fa-instagram" href="#" /></li>
                <li className="social__item"><a className="fa fa-behance" href="#" /></li>
              </ul>
            </section>
          </div>
          <div className="col-lg-4 text-right footer__column">
            <section className="widget widget_text">
              <div className="textwidget ">
                <p className=" text-white">+91 9625064678<br/>+91 98100 21541<br/> +91 88103 19691 <br/> +91 120 41 56317</p>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">glastonemosiac@gmail.com</span></a></div>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">vipul.gupta@glastonemosiac.com</span></a></div>
               
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="footer__area-secondary">
        <div className="footer__row row justify-content-between align-items-center">
          <div className="col-lg-6 order-lg-2 footer__column text-right">
            <section className="widget widget_cassio_menu_inline">
              <ul className="menu">
                <li><a href="#">Terms of Usage</a>
                </li>
                <li><a href="#">Privacy Policy</a>
                </li>
                <li><a href="#">Cookies Policy</a>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-lg-6 order-lg-1 footer__column text-left">
            <section className="widget widget_cassio_copyright"><small className="copyright">© 2020</small></section>
          </div>
        </div>
      </div>
    </footer>
)
}

export default Footer

