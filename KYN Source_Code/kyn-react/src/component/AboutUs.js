import React, { Component } from 'react';

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section class="h-100 h-custom bg-dark">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3">
                  <img src="../assests/images/about.jpg"
                    alt="Sample photo" class="img-fluid" id='regimgn'
                  />
                  <div class="card-body p-4 p-md-5">
                    <h2 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{ textAlign: 'center' }}>About Us</h2>

                    <p className="text-black-100" style={{ textAlign: 'justify' }}>Welcome to "Know Your Neighborhood"! We are a passionate
                      community of residents dedicated to helping people embrace and appreciate their local surroundings. We understand the
                      distinctiveness of each neighborhood, which is why we have curated a website that embraces the unique characteristics
                      and charm of our beloved locality. Whether it's exploring local businesses and events or accessing community resources
                      and updates, our objective is to serve as a comprehensive hub catering to all neighborhood-related needs. Yet, we offer
                      much more than just a resource hub.</p>

                    <p className="text-black-100" style={{ textAlign: 'justify' }}>We firmly believe in the strength of community, which is why
                      we have incorporated features such as message forums and user-generated content into our platform. "Know Your Neighborhood"
                      aims to serve as a virtual gathering place where neighbors can connect, interact, and build relationships. Whether you are a
                      recent arrival or a longtime inhabitant, we warmly invite you to be part of the vibrant celebration of what sets our community
                      apart. We sincerely appreciate your choice of "Know Your Neighborhood" as the ultimate go-to destination for everything local.</p>

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

export default AboutUs;
