import React, { Component } from 'react';
import axios from 'axios';


class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      "text": ''
    }
  }

  MessageChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  sendMessage = (event) => {
    axios.post('messages/Devinda Stallone', this.state)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <React.Fragment>
        <section class="h-100 h-custom bg-dark">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3">
                  <img src="../assests/images/contactus.jpg"
                    alt="Sample photo" class="img-fluid" id='regimgn'
                  />
                  <div class="card-body p-4 p-md-5">
                    <h2 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{ textAlign: 'center' }}>Contact Us</h2>

                    <section class="contact-section">
                      <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5">
                          <div class="col-md-12 mb-3 mb-md-0">
                            <div class="card py-6 h-100">
                              <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-secondary mb-2"></i>
                                <h4 class="text-uppercase m-0 text-secondary">Address</h4>
                                <div class="large text-black-50">Colombo, Sri Lanka.</div>
                                <hr class="my-4 mx-auto" />
                              </div>
                              <div class="card-body text-center">
                                <i class="fas fa-envelope text-secondary mb-2"></i>
                                <h4 class="text-uppercase m-0 text-secondary">Email</h4>
                                <div class="large text-black-50"><a href="#!" id='email'>knowmyneighbours@business.email.com</a></div>
                                <hr class="my-4 mx-auto" />
                              </div>
                              <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-secondary mb-2"></i>
                                <h4 class="text-uppercase m-0 text-secondary">Phone</h4>
                                <div class="large text-black-50">+94 77 44 22 987</div>
                                <hr class="my-4 mx-auto" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section><br></br><br></br>
                    <section class="signup-section" id="signup">
                      <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5">
                          <div class="col-md-10 col-lg-8 mx-auto text-center">
                            <h4 class="text-black mb-5" >Send Message</h4>
                            <form class="form-signup" id="contactForm" onSubmit={this.sendMessage} >
                              <div class="row input-group-newsletter">
                                <div class="col"><textarea class="form-control" id="emailAddress" type="text" placeholder="Type Here..." value={this.state.text} onChange={this.MessageChange} /></div>
                                <br></br><br></br><br></br>
                                <button class="btn btn-dark " id="submitButton" type="submit">Submit</button>
                              </div>

                            </form>
                          </div>
                        </div>
                      </div>
                    </section>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>
    )
  }
}

export default ContactUs;