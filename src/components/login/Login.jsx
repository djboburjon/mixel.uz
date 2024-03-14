import React, { useEffect, useState } from "react";
import "./Login.css";
import { FaTimes } from "react-icons/fa";

function Login({setToken, login, setLogin, signUp, setSignUp }) {

  const [userLogin, setUserLogin] = useState()
  const [userPassword, setUserPassword] = useState()


  const getToken = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: userLogin,
      password: userPassword,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://ecommerce0003.pythonanywhere.com/token/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.access) {
          setToken(result.access);
          localStorage.setItem("token", result.access)
          setLogin(false);
          setUserLogin("")
          setUserPassword("")
          console.log("Foydalanuvchi kirdi.");
        } else {
          alert("There is no information")
        }
      })
      .catch((error) => console.error(error));
  };

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
            <input value={userLogin} onChange={(e) => {
              setUserLogin(e.target.value)
            }} type="text" placeholder="Login" />
            <h3>Password</h3>
            <input value={userPassword} onChange={(e) => {
              setUserPassword(e.target.value)
            }} type="password" placeholder="Enter your password" />
            <button onClick={()=>{
              getToken()
            }}>Login</button>
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
            setLogin(false);
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
