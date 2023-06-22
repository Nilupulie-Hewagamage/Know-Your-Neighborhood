import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';


const Login = ({ onLogin }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Login successful, navigate to the AddStore component
          navigate('/addstore');
          setIsLoggedIn(true);
          onLogin();
        } else {
          // Login failed, display error message or handle accordingly
          console.log('Login failed');
          navigate('/login');

        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  const handleFacebookLogin = (response) => {
    // Handle Facebook login response
    navigate('/addstore');
  };

  return (
    <React.Fragment>
      <section class="h-100 h-custom bg-dark">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-8 col-xl-6">
              <div class="card rounded-3">
                <img src="../assests/images/login.jpg"
                  alt="Sample photo" class="img-fluid" id='regimgn'
                />
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login</h3>

                  <form class="px-md-2" onSubmit={handleSubmit}>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example1q">Email</label>
                      <input type="email" id="form3Example1q" class="form-control" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example1q">Password</label>
                      <input type="password" id="form3Example1q" class="form-control" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div class="form-check d-flex justify-content-start mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                      <label class="form-check-label" for="form1Example3"> Remember password </label>
                    </div>

                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                    <p class="text-center text-muted mt-5 mb-0">Have no account? <a href="/register"
                      class="fw-bold text-body" ><u>Register here</u></a></p>
                    <hr class="my-4" />

                    <div class="facebook">
                      <FacebookLogin
                        appId="1577504256106032"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={handleFacebookLogin}
                      />
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment >
  );
};
export default Login;
