import React, { useState } from 'react';
import axios from 'axios';

const SearchStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:9095/search?query=${searchTerm}`
      );

      setSearchResults(response.data);
    } catch (error) {
      console.error('Error occurred while fetching data:', error);
    }

    setIsLoading(false);
  };

  return (
    <section class="about-section text-center" id="search">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-12">
            <h2 class="text-white mb-4">Search Store</h2>
            <div>
              <div class="input-group justify-content-center">
                <div class="form-outline">
                  <input type="search"
                    id="form1"
                    value={searchTerm}
                    onChange={handleInputChange} class="form-control" />
                </div>
                <button type="button" class="btn btn-dark" onClick={handleSearch}>
                  <i class="fas fa-search"></i>
                </button>
              </div>
              <br />
              <br />



              {isLoading ? (
                <p className='text-center text-success h6'>Loading...</p>

              ) : (
                <ul>
                  {searchResults.map((store) => (
                    <li key={store.storeId} id='searchcard' className='justify-content-center'>
                      <div class="card bg-black border border-success" id='card'>
                        <img src="../assests/images/store-img.jpg" class="card-img-top" alt="" />
                        <div class="card-body bg-black ">
                          <h5 class="card-title text-light ">Stores</h5>
                        </div>
                        <ul class="list-group list-group-small text-start bg-black border-0">
                          <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-primary'>STORE NAME: </span>{store.storename}</li>
                          <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-success'>OWNER NAME: </span>{store.ownername}</li>
                          <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-warning'>PHONE NUMBER: </span>{store.phonenumber}</li>
                          <li class="list-group-item px-4 bg-black text-light"><span className='cardspan text-danger'>LOCATION: </span>{store.localities}</li>

                        </ul>

                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default SearchStore;
