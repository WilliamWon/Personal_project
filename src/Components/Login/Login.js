import React from "react";
// import "./Login.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";
const LoginPage = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
const LoginBody = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Slogan = styled.p`
  font-size: 4.5em;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  line-height: 1.4em;
  letter-spacing: 0.5px;
  color: white;
  margin: 30px 0 30px 0;
`;
const LoginButton = styled.button`
  border-radius: 4px;
  background-color: #1ed4f4;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 1;
  transition: 0.3s;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  outline: none;

  &.loginButton:hover {
    box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
    opacity: 0.6;
  }
`;
const Mid = styled.div`
  background: lightpink;
`;
const Login = () => (
  <LoginPage>
    <Header />
    <LoginBody>
      <Mid>
        <Slogan>Ventilate Your Thoughts</Slogan>
        <a href={process.env.REACT_APP_LOGIN}>
          <LoginButton className="loginButton">LOGIN</LoginButton>
        </a>
      </Mid>
    </LoginBody>
    <Footer />
  </LoginPage>
);

export default Login;
