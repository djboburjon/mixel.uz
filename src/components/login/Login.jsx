import React, { useEffect, useState } from "react";
import "./Login.css";
import { FaTimes } from "react-icons/fa";

function Login({
  user,
  userInfo,
  setUserInfo,
  setToken,
  login,
  setLogin,
  signUp,
  setSignUp,
  setLoading
}) {
  const [userLogin, setUserLogin] = useState();
  const [userPassword, setUserPassword] = useState();

  const [nameUser, setNameUser] = useState()
  const [userKey, setUserKey] = useState()
  const [email, setEmail] = useState()
  const [first_name, setFirst_name] = useState()
  const [last_name, setLast_name] = useState()
  const [phone_number, setPhone_number] = useState()
  const [city, setCity] = useState()
  const [address, setAddress] = useState()

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
          localStorage.setItem("token", result.access);
          setLogin(false);
          setUserLogin("");
          setUserPassword("");
          console.log("Foydalanuvchi kirdi.");
          setLoading(false)
        } else {
          setLoading(false)
          alert("Incorrect information or register now");
        }
      })
      .catch((error) => console.error(error));
  };

  const getUserData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: nameUser,
      password: userKey,
      email: email,
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      city: 2,
      address: address,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://ecommerce0003.pythonanywhere.com/user/register/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
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
            <input
              value={userLogin}
              onChange={(e) => {
                setUserLogin(e.target.value);
              }}
              type="text"
              placeholder="Login"
            />
            <h3>Password</h3>
            <input
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter your password"
            />
            <button
              onClick={() => {
                setLoading(true)
                getToken();
              }}
            >
              Login
            </button>
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
          <div className="form register_form">
            <div>
              <div className="form_left">
                <h3>First Name</h3>
                <input value={first_name} onChange={(e) => {
                  setFirst_name(e.target.value)
                }} type="text" placeholder="Name" />
                <h3>Last Name</h3>
                <input value={last_name} onChange={(e) => {
                  setLast_name(e.target.value)
                }} type="text" placeholder="Login" />
                <h3>Username</h3>
                <input value={nameUser} onChange={(e) => {
                  setNameUser(e.target.value)
                }} type="text" placeholder="Login" />
                <h3>Number</h3>
                <input value={phone_number} onChange={(e) => {
                  setPhone_number(e.target.value)
                }} type="text" placeholder="Mobile number" />
              </div>
              <div className="form_right">
                <h3>Email</h3>
                <input value={email} onChange={(e) => {
                  setEmail(e.target.value)
                }} type="text" placeholder="Enter your email" />
                <h3>Password</h3>
                <input value={userKey} onChange={(e) => {
                  setUserKey(e.target.value)
                }} type="password" placeholder="Enter your password" />
                <h3>City</h3>
                <input type="text" placeholder="Living area" />
                <h3>Address</h3>
                <input value={address} onChange={(e) => {
                  setAddress(e.target.value)
                }} type="text" placeholder="Your address" />
              </div>
            </div>
            <button onClick={() => {
              getUserData()
              setSignUp(false)
              setLogin(true)
            }}>Sign Up</button>
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

      {/* {user && (
        <div className={userInfo ? "login active" : "login"}>
          <div
            className="exit_btn"
            onClick={() => {
              setUserInfo(false);
            }}
          >
            <FaTimes />
          </div>
          <div className="container">
            <div className="form register_form">
              <div>
                <div className="form_left">
                  <h3>First Name</h3>
                  <input
                    value={user.first_name}
                    type="text"
                    placeholder="Name"
                    disabled
                  />
                  <h3>Last Name</h3>
                  <input
                    value={user.last_name}
                    type="text"
                    placeholder="Login"
                    disabled
                  />
                  <h3>Username</h3>
                  <input
                    value={user.username}
                    type="text"
                    placeholder="Login"
                    disabled
                  />
                  <h3>Number</h3>
                  <input
                    value={user.phone_number}
                    type="text"
                    placeholder="Mobile number"
                    disabled
                  />
                </div>
                <div className="form_right">
                  <h3>Email</h3>
                  <input
                    value={user.email}
                    type="text"
                    placeholder="Enter your email"
                    disabled
                  />
                  <h3>Password</h3>
                  <input
                    value={user.password}
                    type="text"
                    placeholder="Enter your password"
                    disabled
                  />
                  <h3>City</h3>
                  <input
                    value={`${user.city.name}, ${user.city.region.name}`}
                    type="text"
                    placeholder="Living area"
                    disabled
                  />
                  <h3>Address</h3>
                  <input
                    value={user.address}
                    type="text"
                    placeholder="Your address"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Login;
