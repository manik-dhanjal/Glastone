import React from "react"

const Footer =()=>{
    return(
        <footer class="footer container-fluid">
        <div class="footer__area-primary">
          <div class="footer__row row">
            <div class="col-lg-4 text-left footer__column">
              <section class="widget widget_cassio_logo"><a class="logo" href="homepage-slider-4.html">
                  <div class="logo__text"><span class="logo__text-title">Glastone</span></div></a>
                <p>Mosiac by Glastone</p>
              </section>
            </div>
            <div class="col-lg-4 text-center footer__column">
              <section class="widget widget_cassio_social">
                <ul class="social">
                  <li class="social__item"><a class="fa fa-facebook-f" href="#"></a></li>
                  <li class="social__item"><a class="fa fa-twitter" href="#"></a></li>
                  <li class="social__item"><a class="fa fa-instagram" href="#"></a></li>
                  <li class="social__item"><a class="fa fa-behance" href="#"></a></li>
                </ul>
              </section>
            </div>
            <div class="col-lg-4 text-right footer__column">
              <section class="widget widget_text">
                <div class="textwidget">
                <p >+91 9625064678<br/>+91 98100 21541<br/> +91 88103 19691 <br/> +91 120 41 56317</p>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">glastonemosiac@gmail.com</span></a></div>
                <div className="figure-contact__item"><a href="#"><span className="__cf_email__" data-cfemail="6e0d0f1d1d07012e0b160f031e020b400d0103">vipul.gupta@glastonemosiac.com</span></a></div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="footer__area-secondary">
          <div class="footer__row row justify-content-end align-items-center">
            <div class="col-lg-6 order-lg-2 footer__column text-right">
              <section class="widget widget_cassio_menu_inline">
                <ul class="menu">
                  <li><a href="#">Terms of Usage</a>
                  </li>
                  <li><a href="#">Privacy Policy</a>
                  </li>
                  <li><a href="#">Cookies Policy</a>
                  </li>
                </ul>
              </section>
            </div>
            {/* <div class="col-lg-6 order-lg-1 footer__column text-left">
              <section class="widget widget_cassio_copyright"><small class="copyright">© 2019 Cassio – Creative Portfolio AJAX Template for Architects and Interior Designers. Crafted by <a href="https://artemsemkin.com/" target="_blank">Artem Semkin.</a></small></section>
            </div> */}
          </div>
        </div>
      </footer>
    )
}

export default Footer;