import React from "react";
import "./Login.css";
import Header from "../Header/Header";

const Login = () => (
  <div id="loginPage">
    <Header />
    <section id="section-a">
      <div className="bg" />
      <div className="mid ">
        <p className="slogan">Ventilate Your Thoughts</p>
        <a href={process.env.REACT_APP_LOGIN}>
          <button className="loginButton">LOGIN</button>
        </a>
      </div>
    </section>
    <section id="section-b" />
    <div id="homeDesign__container">
      <div className="leftSide">
        <div className="slogan__box">
          <div className="slogan">Ventilate Your Thoughts</div>
          <div className="slogan__bar" />
          <a href={process.env.REACT_APP_LOGIN}>
            <button className="loginButton">LOGIN</button>
          </a>
        </div>
      </div>
      <div className="rightSide">
        <div className="imageBoxes">
          <div className="image one" />
          <div className="image two" />
          <div className="image three" />
          <div className="image four" />
        </div>
      </div>
    </div>
  </div>
);

export default Login;
