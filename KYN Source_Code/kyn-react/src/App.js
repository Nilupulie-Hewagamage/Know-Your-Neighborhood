import Register from './component/Register';
import Login from './component/Login';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Terms from './component/TermsConditions';
import AddStore from './component/AddStore';
import ShowStore from './component/ShowStore';
import SearchStore from './component/SearchStore';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import axios from 'axios';
import React, { Component, useState } from 'react';
import './App.css'


class App extends Component {

  constructor() {
    super();
    this.state = {
      store: [],
      isLoggedIn: false,
    }
  }
  componentDidMount() {
    axios.get('showstore')
      .then(res => {
        this.setState({
          store: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  render() {
    const handleButtonClick = () => {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };
    const { isLoggedIn } = this.state;

    return (
      <React.Fragment>
        <Router>
          <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-8 px-lg-5">
              <a class="navbar-brand" href="/">KNOW-YOUR-NEIGHBORHOOD</a>

              <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item"><Link to="/login" id='#' class="nav-link text-black" onClick={handleButtonClick}>Login</Link></li>
                  <li class="nav-item"><Link to="/register" id='#' class="nav-link text-black" onClick={handleButtonClick}>Register</Link></li>
                  <li class="nav-item"><Link to="/aboutus" id='#' class="nav-link text-black" onClick={handleButtonClick}>About Us</Link></li>
                  <li class="nav-item"><Link to="/contactus" id='#' class="nav-link text-black" onClick={handleButtonClick}>Contact Us</Link></li>
                  <li class="nav-item"><Link to="/terms" id='#' class="nav-link text-black" onClick={handleButtonClick}>Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <br></br>
          <br></br>
          <br></br>

          <header class="masterhead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
              <div class="d-flex justify-content-center">
                <div class="text-center">
                  <h1 class="mx-auto my-0 text-uppercase">KNOW-YOUR-NEIGHBORHOOD</h1>
                  <br></br>
                  <br></br>

                  <Link to="/addstore" id='#addstore' class="btn btn-dark" onClick={handleButtonClick}>Add Stores</Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/show" id='#showstore' class="btn btn-dark" onClick={handleButtonClick}>View Stores </Link>&nbsp;&nbsp;&nbsp;
                  <Link to="/search" id='#searchstore' class="btn btn-dark" onClick={handleButtonClick}>Search Stores</Link>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </header>
          <div>
            <Routes>

              <Route path="/addstore" element={isLoggedIn ? <AddStore /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login onLogin={this.handleLogin} />}>
              </Route>
              <Route path="/register" element={<Register />}>
              </Route>
              <Route path="/aboutus" element={<AboutUs />}>
              </Route>
              <Route path="/contactus" element={<ContactUs />}>
              </Route>
              <Route path="/terms" element={<Terms />}>
              </Route>
              <Route path="/search" element={isLoggedIn ? <SearchStore /> : <Navigate to="/login" />}>
              </Route>
              <Route path="/show" element={isLoggedIn ? <ShowStore alldata={this.state.store} /> : <Navigate to="/login" />}>
              </Route>
            </Routes>

          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
