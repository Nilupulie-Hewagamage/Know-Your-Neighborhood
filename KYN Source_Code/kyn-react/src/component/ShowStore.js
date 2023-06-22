import React, { Component } from 'react';


class ShowStore extends Component {


  render() {
    const mydata = this.props.alldata;
    const sdata = mydata.map((store, key) =>
      <div class="card bg-light border border-success" id='card'>
        <img src="../assests/images/store-img.jpg" class="card-img-top" alt="" />
        <div class="card-body bg-light ">
          <h5 class="card-title text-dark">Stores</h5>
        </div>
        <ul class="list-group list-group-small text-start bg-light border-0">
          <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-primary'>STORE NAME: </span>{store.storename}</li>
          <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-success'>OWNER NAME: </span>{store.ownername}</li>
          <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-warning'>PHONE NUMBER: </span>{store.phonenumber}</li>
          <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-danger'>LOCATION: </span>{store.localities}</li>

        </ul>

      </div>);
    return (

      <React.Fragment>
        <section class="about-section text-center" id="show">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-12 ">
                <div>
                  <h2 class="text-dark mb-4">The Stores</h2>
                  <div className='cardmain'>
                    {sdata}
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

export default ShowStore;