import axios from 'axios';
import React, { Component } from 'react';


class AddStore extends Component {

  constructor() {
    super();
    this.state = {
      "storename": '',
      "ownername": '',
      "phonenumber": '',
      "localities": ''
    }
  }
  storeChange = (event) => {
    this.setState({
      storename: event.target.value
    })
  }
  ownerChange = (event) => {
    this.setState({
      ownername: event.target.value
    })
  }

  numberChange = (event) => {
    this.setState({
      phonenumber: event.target.value
    })
  }

  locationChange = (event) => {
    this.setState({
      localities: event.target.value
    })
  }


  addstore = (event) => {
    axios.post('addstore', this.state)
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
                  <img src="../assests/images/store.jpg"
                    alt="Sample photo" class="img-fluid" id='regimgn'
                  />
                  <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Add Your Store</h3>

                    <form class="px-md-2 " onSubmit={this.addstore}>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1q">Store Name</label>
                        <input type="text" id="form3Example1q" class="form-control" value={this.state.storename} onChange={this.storeChange} />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1q">Owner Name</label>
                        <input type="text" id="form3Example1q" class="form-control" value={this.state.ownername} onChange={this.ownerChange} />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1q">Phone Number</label>
                        <input type="text" id="form3Example1q" class="form-control" value={this.state.phonenumber} onChange={this.numberChange} />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1q">Location</label>
                        <input type="text" id="form3Example1q" class="form-control" value={this.state.localities} onChange={this.locationChange} />
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

export default AddStore;