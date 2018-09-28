import React from "react";
import "./Login.css";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import ExBody from "../Explanation/Explanation";
import device from "../../Device/Device";
// import Search from "../Search/Search";

const LoginPage = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
// Login First #1
const LoginBody = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  /* background: #fcc964; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;
const LoginBodyHalves = styled.div`
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  /* background-color: #0d37e0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 70px;
`;
const SecondHalf = styled(LoginBodyHalves)`
  /* position: fixed; */
  background: white;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #fcc964; */
  padding-right: 0;
`;
const LoginCardCarrier = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
// Login First #1 End
const Logo = styled.div`
  box-sizing: border-box;
  font-family: "Bevan", cursive;
  /* font-family: "Noto Serif KR", sans-serif; */
  font-size: 12em;
  font-weight: 600;
  letter-spacing: 1px;
  /* color: #111c2e; */
  /* background: pink; */
  /* margin-bottom: -80px; */
`;
const Slogan = styled.div`
  font-size: 2.5em;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  line-height: 1.4em;
  letter-spacing: 0.5px;
  color: black;
  /* background: hotpink; */
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

const Login = () => (
  <LoginPage>
    <LoginBody>
      <ContentContainer>
        <LoginBodyHalves>
          <Logo>VENT</Logo>
          <Slogan>Ventilate Your Thoughts</Slogan>
        </LoginBodyHalves>
        <SecondHalf>
          <LoginCardCarrier>
            <a href={process.env.REACT_APP_LOGIN}>
              <LoginButton className="loginButton">LOGIN</LoginButton>
            </a>
          </LoginCardCarrier>
        </SecondHalf>
      </ContentContainer>
    </LoginBody>
    <ExBody />
    {/* <Search /> */}
    <Footer />
  </LoginPage>
);

export default Login;
