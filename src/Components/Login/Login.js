import React from "react";
import "./Login.css";

const Login = () => (
  <div id="loginPage">
    <div id="loginBox">
      <div className="logo">VENT</div>
      <a href={process.env.REACT_APP_LOGIN}>
        <button className="loginButton">LOGIN</button>
      </a>
    </div>
  </div>
);

export default Login;
