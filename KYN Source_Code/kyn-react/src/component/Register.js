import axios from 'axios';
import React, { Component } from 'react';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      "name": '',
      "email": '',
      "password": '',
      "confirmPassword": ''
    }
  }
  nameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  emailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  confirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value
    })
  }


  addUser = (event) => {
    axios.post('adduser', this.state)
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
                  <img src="../assests/images/register.jpg"
                    alt="Sample photo" class="img-fluid" id='regimgn'
                  />
                  <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                    <form class="px-md-2" onSubmit={this.addUser}>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1q">Name</label>
                        <input type="text" id="form3Example1q" class="form-control" value={this.state.name} onChange={this.nameChange} />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1q">Email</label>
                        <input type="email" id="form3Example1q" class="form-control" value={this.state.email} onChange={this.emailChange} />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1q">Password</label>
                        <input type="password" id="form3Example1q" class="form-control" value={this.state.password} onChange={this.passwordChange} />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1q">Confirm Password</label>
                        <input type="password" id="form3Example1q" class="form-control" value={this.state.password} onChange={this.confirmPasswordChange} />
                      </div>

                      <button type="submit" class="btn btn-dark btn-lg mb-1">Submit</button>

                    </form>

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
export default Register;
