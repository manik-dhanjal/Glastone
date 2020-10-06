import React from "react";

const SectionForm=()=>{
    return (
        <div className="bg-white">
        <section className="section section-form text-center section_pb-small section-offset_top">
          <div className="container border-radius section-offset__content bg-dark-3">
            <div className="row justify-content-center">
              <div className="col-sm-10">
                <form className="form form-contact js-ajax-form" action="https://artemsemkin.com/cassio/html/mail.php" method="POST" data-message-success="Thanks for your message! We will reply you as soon as possible." data-message-error="Something went wrong :( Please contact me directly on cassio@example.com">
                  <h3 className="form__heading">Get in Touch with Us!</h3>
                  <div className="row form__row">
                    <div className="col form__col">
                      <label className="input-float js-input-float">
                        <input className="input-float__input" type="text" name="visitor_name" required="required" data-msg="Please enter your name"/><span class="input-float__label">Your Name</span><span class="form__error"></span>
                      </label>
                    </div>
                  </div>
                  <div className="row form__row">
                  <div className="col form__col">
                      <label className="input-float js-input-float">
                        <input className="input-float__input" type="email" name="visitor_email" required="required" data-msg="Please enter a correct e-mail"/><span class="input-float__label">Your E-mail</span><span class="form__error"></span>
                      </label>
                    </div>
                  </div>
                  <div className="row form__row">
                  <div className="col form__col">
                      <label className="input-float js-input-float">
                        <input className="input-float__input" type="tel" name="visitor_phone" required="required" data-msg="Please enter a correct number"/><span class="input-float__label">Your Phone</span><span class="form__error"></span>
                      </label>
                    </div>
                  </div>
                  <div className="row form__row">
                    <div className="col form__col">
                      <label className="input-float js-input-float">
                        <textarea className="input-float__input input-float__input_textarea" name="visitor_msg"></textarea><span class="input-float__label">Your Message</span><span class="form__error"></span>
                      </label>
                    </div>
                  </div>
                  <div className="row form__row">
                    <div className="col form__col form__col_submit">
                      <button className="button button_solid button_accent-primary-4 button_fullwidth" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}
export default SectionForm;