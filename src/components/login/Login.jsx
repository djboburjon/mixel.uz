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
      city: Math.floor(city),
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

  const [cities, setCities] = useState(null)

  const getCity = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzNzAyMTM1LCJpYXQiOjE3MTExMTAxMzUsImp0aSI6ImU3MzIyNGI2M2JmNDQ1MjI5ZDQ1MGM0NTY5ZTkwNGEzIiwidXNlcl9pZCI6M30.OK1-fXYQg8C5sUJTqTG4NYoEm_CjhDhJZ79qyvl5da4");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://ecommerce0003.pythonanywhere.com/order/cities/", requestOptions)
      .then((response) => response.json())
      .then((result) => setCities(result))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getCity()
  }, [])

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
                setUserInfo(false)
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
                <select onChange={(e) => {
                  setCity(e.target.value)
                }} name="" id="">
                  {cities?.map((item) => {
                    return <option value={item.id}>{item.name}</option>
                  })}
                </select>
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

      {user?.username && (
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
              <button onClick={() => {
                setLoading(true)
                localStorage.clear();
                setToken(null)
                setLoading(false)
              }}>Log Out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
