import React from "react";

const SectionForm=()=>{
    return (
        <div class="bg-white">
        <section class="section section-form text-center section_pb-small section-offset_top">
          <div class="container border-radius section-offset__content bg-off-white">
            <div class="row justify-content-center">
              <div class="col-sm-10">
                <form class="form form-contact js-ajax-form" action="https://artemsemkin.com/cassio/html/mail.php" method="POST" data-message-success="Thanks for your message! We will reply you as soon as possible." data-message-error="Something went wrong :( Please contact me directly on cassio@example.com">
                  <h3 class="form__heading">Get in Touch with Us!</h3>
                  <div class="row form__row">
                    <div class="col-lg-6 form__col">
                      <label class="input-float js-input-float">
                        <input class="input-float__input" type="text" name="visitor_name" required="required" data-msg="Please enter your name"/><span class="input-float__label">Your Name</span><span class="form__error"></span>
                      </label>
                    </div>
                    <div class="col-lg-6 form__col">
                      <label class="input-float js-input-float">
                        <input class="input-float__input" type="email" name="visitor_email" required="required" data-msg="Please enter a correct e-mail"/><span class="input-float__label">Your E-mail</span><span class="form__error"></span>
                      </label>
                    </div>
                  </div>
                  <div class="row form__row">
                    <div class="col form__col">
                      <label class="input-float js-input-float">
                        <textarea class="input-float__input input-float__input_textarea" name="visitor_msg"></textarea><span class="input-float__label">Your Message</span><span class="form__error"></span>
                      </label>
                    </div>
                  </div>
                  <div class="row form__row">
                    <div class="col form__col form__col_submit">
                      <button class="button button_solid button_accent-secondary-2 button_fullwidth" type="submit">Send Message</button>
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