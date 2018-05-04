import React from "react";
import "./Login.css";

const Login = () => (
  <div id="loginPage">
    {/* <div id="loginPage__container">
      <div className="logo">VENT</div>
      <div id="loginBox">
        <a href={process.env.REACT_APP_LOGIN}>
          <button className="loginButton">LOGIN</button>
        </a>
      </div>
    </div> */}
    <div className="box box1">
      <div className="minibox">
        <div className="logo">VENT</div>
      </div>
      <div className="mini2" />
    </div>
    <div className="box box2">
      <div />
      <div className="box2__container">
        <p className="box2__container__slogan">
          Ventilate Your <br />Thoughts
        </p>
      </div>
      <div />
    </div>
    <div className="box box3">
      <div />
      <div className="minibox3">
        <a href={process.env.REACT_APP_LOGIN}>
          <button className="loginButton">LOGIN</button>
        </a>
      </div>
    </div>
  </div>
);

export default Login;
