import React from "react";
import "./Login.css";
import { FaTimes } from "react-icons/fa";

function Login({ login, setLogin, signUp, setSignUp }) {
  return (
    <>
      <div className={login ? "login active" : "login"}>
        <div
          className="exit_btn"
          onClick={() => {
            setLogin(false);
          }}
        >
          <FaTimes />
        </div>
        <div className="container">
          <div className="form" action="">
            <h3>Username</h3>
            <input type="text" placeholder="Login" />
            <h3>Password</h3>
            <input type="password" placeholder="Enter your password" />
            <button>Login</button>
            <a
              onClick={() => {
                setSignUp(true);
              }}
              className="signUp"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div className={signUp ? "login active" : "login"}>
        <div
          className="exit_btn"
          onClick={() => {
            setSignUp(false);
            setLogin(false)
          }}
        >
          <FaTimes />
        </div>
        <div className="container">
          <div className="form register_form" action="">
            <div>
              <div className="form_left">
                <h3>First Name</h3>
                <input type="text" placeholder="Name" />
                <h3>Last Name</h3>
                <input type="text" placeholder="Login" />
                <h3>Username</h3>
                <input type="text" placeholder="Login" />
                <h3>Number</h3>
                <input type="password" placeholder="Mobile number" />
              </div>
              <div className="form_right">
                <h3>Email</h3>
                <input type="password" placeholder="Enter your email" />
                <h3>Password</h3>
                <input type="password" placeholder="Enter your password" />
                <h3>City</h3>
                <input type="password" placeholder="Living area" />
                <h3>Address</h3>
                <input type="password" placeholder="Your address" />
              </div>
            </div>
            <button>Sign Up</button>
            <a
              onClick={() => {
                setSignUp(false);
                setLogin(true);
              }}
              className="signUp"
              href="#"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
