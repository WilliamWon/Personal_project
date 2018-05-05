import React from "react";
import "./Login.css";

const Login = () => (
  <div id="loginPage">
    {/* <div className="box box1">
      <div className="minibox">
        <div className="logo">VENT</div>
      </div>
      <div className="mini2" />
    </div>
    <div className="box box2">
      <div />
      <div className="box2__container">
        <p className="box2__container__slogan">Ventilate Your Thoughts</p>
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
    </div> */}
    <div id="header">
      <div className="header__container">
        <div className="logo">VENT</div>
      </div>
    </div>
    <section id="section-a">
      <div className="mid ">
        <p className="slogan">Ventilate Your Thoughts</p>
        <a href={process.env.REACT_APP_LOGIN}>
          <button className="loginButton">LOGIN</button>
        </a>
      </div>
    </section>
    <section id="section-b" />
  </div>
);

export default Login;
