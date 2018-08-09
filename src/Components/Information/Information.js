import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateUserName,
  updateEmail,
  updateAddress,
  updateCity,
  updateMyState,
  updateZip
} from "../../ducks/infoReducer";
import "./Information.css";
import Header from "../Header/Header";
import styled from "styled-components";

const InfoInput = styled.div`
  width: 100%;
  height: 100vh;
`;
const InfoInputBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #1ed4f4; */
  background-color: #a7dbef;
`;
const InfoInputContainer = styled.div`
  position: relative;
  width: 68vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin-top: 10vh;
`;
const InfoInputIntro = styled.div`
  width: 100%;
  height: 30vh;
  font-size: 1.4em;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InfoInputSections = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const InfoInputHead = styled.div`
  font-family: "Bevan", cursive;
  font-size: 2.1em;
`;
const InfoInputArea = styled.input`
  font-size: 0.8em;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  height: 30px;
  outline: none;
  border: solid 1px rgb(255, 204, 128);
  padding-left: 15px;
  border-radius: 24px;
  width: 300px;
  padding-top: 1px;

  &.username {
  }
  &.email {
  }
  &.address {
  }
  &.zipcode {
  }
  &.city {
    width: 225px;
  }
  &.state {
    width: 45px;
  }
`;
const CityState = styled.div`
  width: 318px;
  display: flex;
  justify-content: space-between;
`;
const InfoInputConfirmContainer = styled.div`
  width: 100%;
  height: 20vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InfoInputConfirm = styled.button`
  border-radius: 4px;
  background-color: #1ed4f4;
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 1;
  transition: 0.3s;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  outline: none;

  &.confirmHover:hover {
    box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
    opacity: 0.6;
  }
`;
const Filler = styled.div`
  width: 60vw;
  height: 5vh;
  background-color: white;
`;
class Information extends Component {
  render() {
    const {
      updateUserName,
      updateEmail,
      updateAddress,
      updateCity,
      updateMyState,
      updateZip
    } = this.props;

    return (
      <InfoInput
      // name="myForm"
      // action="/action_page.php"
      // onsubmit="return validateForm()"
      // method="post"
      // id="infoInput"
      >
        <Header />
        <InfoInputBackground>
          <InfoInputContainer>
            <InfoInputIntro>
              <InfoInputHead>WELCOME</InfoInputHead>
              Let us get to know you a little better...
            </InfoInputIntro>
            <InfoInputSections>
              <InfoInputArea
                className="username"
                placeholder="Desired Display Name"
                type="text"
                onChange={e => updateUserName(e.target.value)}
              />
              <InfoInputArea
                className="email"
                placeholder="Primary Email"
                type="text"
                onChange={e => updateEmail(e.target.value)}
              />
              <InfoInputArea
                className="address"
                placeholder="Home Address"
                type="text"
                onChange={e => updateAddress(e.target.value)}
              />
              <CityState className="cityState">
                <InfoInputArea
                  className="city"
                  placeholder="City"
                  type="text"
                  onChange={e => updateCity(e.target.value)}
                />
                <InfoInputArea
                  className="state"
                  placeholder="State"
                  type="text"
                  onChange={e => updateMyState(e.target.value)}
                />
              </CityState>
              <InfoInputArea
                className="zipcode"
                placeholder="Zipcode"
                type="number"
                onChange={e => updateZip(e.target.value)}
              />
            </InfoInputSections>
            <InfoInputConfirmContainer>
              <Link to="/confirm">
                <InfoInputConfirm className="confirmHover">
                  <span>Complete</span>
                </InfoInputConfirm>
              </Link>
            </InfoInputConfirmContainer>
            <Filler />
          </InfoInputContainer>
        </InfoInputBackground>
      </InfoInput>
    );
  }
}

const mapStateToProps = state => {
  const { username, email, street_address, city, myState, zipcode } = state;
  return {
    username,
    email,
    street_address,
    city,
    myState,
    zipcode
  };
};

export default connect(
  mapStateToProps,
  {
    updateUserName,
    updateEmail,
    updateAddress,
    updateCity,
    updateMyState,
    updateZip
  }
)(Information);
