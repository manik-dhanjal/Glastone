import React from 'react'

const Footer=()=>{
return(
    <footer className="footer container-fluid">
      <div className="footer__area-primary">
        <div className="footer__row row">
          <div className="col-lg-4 text-left footer__column">
            <section className="widget widget_cassio_logo"><a className="logo" href="homepage-slider-4.html">
                <div className="logo__text"><span className="logo__text-title">Cassio</span></div></a>
              <p>Architect agency based in London</p>
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
              <div className="textwidget">
                <p>+1 504-558-6739<br />+1 918-806-0749</p>
                <p><a href="https://artemsemkin.com/cdn-cgi/l/email-protection#30434540405f424470514244555d43555d5b595e1e535f5d"><span className="__cf_email__" data-cfemail="c5b6b0b5b5aab7b185a4b7b1a0a8b6a0a8aeacabeba6aaa8">[email&nbsp;protected]</span></a></p>
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
            <section className="widget widget_cassio_copyright"><small className="copyright">© 2019 Cassio – Creative Portfolio AJAX Template for Architects and Interior Designers. Crafted by <a href="https://artemsemkin.com/" target="_blank">Artem Semkin.</a></small></section>
          </div>
        </div>
      </div>
    </footer>
)
}

export default Footer

