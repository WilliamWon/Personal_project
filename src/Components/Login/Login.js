import React from "react";
import "./Login.css";

const Login = () => (
  <div id="loginPage">
    <div id="loginPage__container">
      <div className="logo">VENT</div>
      <div id="loginBox">
        <a href={process.env.REACT_APP_LOGIN}>
          <button className="loginButton">LOGIN</button>
        </a>
      </div>
      <div className="loginSideWall" />
    </div>
  </div>
);

export default Login;
