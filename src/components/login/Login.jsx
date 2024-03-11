import React from "react";
import "./Login.css";
import { FaTimes } from "react-icons/fa";

function Login({ login, setLogin }) {
  return (
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
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
