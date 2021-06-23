import React, { Component } from "react";
import Wrapper from "./wrapper";


class Contact extends Component {
  state= {

  };
  render() {
    return (
      <Wrapper>
<div class="card-body">
<section class="mb-4">
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mailto: cgoslin7@gmail.com" method="POST" enctype="">

                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="this">Your name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="this">Your email</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="this">Subject</label>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="4" class="form-control md-textarea"></textarea>
                            <label for="message">Message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
                <button class= "button" onclick="main().catch(console.error)">Send</button>
            </div>
            <div class="status"></div>
        </div>

    </div>

</section>
</div>


      </Wrapper>
    )
  }
}

export default Contact;
