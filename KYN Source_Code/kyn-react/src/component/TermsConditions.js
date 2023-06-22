import React, { Component } from 'react';


class TermsConditions extends Component {
  render() {
    return (
      <React.Fragment>
        <section class="h-100 h-custom bg-dark">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3">
                  <img src="../assests/images/terms.jpg"
                    alt="Sample photo" class="img-fluid" id='regimgn'
                  />
                  <div class="card-body p-4 p-md-5">
                    <h2 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{ textAlign: 'center' }}>Terms and Conditions</h2>

                    <p class="text-black-100" style={{ textAlign: 'justify' }}>Welcome to the KYN website. By using our website, you agree to the following terms and conditions:</p>

                    <p class="text-black-100" style={{ textAlign: 'justify' }}>  You must be 18 years old or have the necessary legal capacity to use the website. Please use the website in compliance with
                      all applicable laws and regulations. Keep your account information confidential and do not share it with others. All content
                      on the website, including text, images, and logos, belongs to KYN or its licensors and is protected by copyright laws. You may
                      not copy, modify, or distribute the content without obtaining permission from KYN. If you submit any content to the website,
                      such as comments or reviews, you grant KYN a license to use and display that content. Please ensure that you have the necessary
                      rights and permissions for the content you submit. The website is provided on an "as is" basis. We make no warranties or
                      representations regarding the accuracy, completeness, or availability of the website. We are not liable for any direct, indirect,
                      incidental, or consequential damages arising from your use of the website. We reserve the right to suspend or terminate your
                      access to the website if you violate these terms or engage in any harmful activities. We may update or modify these terms at any
                      time without prior notice. Any changes will be effective immediately upon posting on the website. These terms are governed by the
                      laws of our Jurisdiction. By using the KYN website, you agree to abide by these terms and conditions. </p>

                    <p class="text-black-100" style={{ textAlign: 'justify' }}>If you have any questions or concerns regarding these terms and conditions, please contact us at knowmyneighbours@business.email.com</p>

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

export default TermsConditions;