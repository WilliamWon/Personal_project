import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { updateUser } from "../../ducks/userReducer";
import Header from "../Header/Header";
import "./InfoConfirm.css";
import styled from "styled-components";

const InfoConfirmMain = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoConfirmBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a7dbef;
  margin-top: 10vh;
`;
const InfoConfirmForm = styled.div`
  position: relative;
  width: 68vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
`;
const InfoConfirmOutro = styled.div`
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
const InfoConfirmHead = styled.div`
  font-family: "Bevan", cursive;
  font-size: 2.1em;
`;
const InfoConfirmStatusContainer = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.pattern > div {
    background: #eee;
  }
  &.pattern > div:nth-child(odd) {
    background: #ddd;
  }
`;
const InfoConfirmConfirm = styled.div`
  width: 100%;
  height: 20vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const InfoConfirmStatus = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 0.7em;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
  padding: 0 15px 0 15px;
`;
const InfoConfirmResults = styled.div`
  font-size: 0.7em;
`;
const FillerSpace = styled.div`
  height: 30px;
`;
const Filler = styled.div`
  width: 60vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const BackButton = styled.button`
  border-radius: 4px;
  width: 60px;
  height: 25px;
  background: rgb(255, 204, 128);
  outline: none;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 0.7em;
  letter-spacing: 0.8px;
  color: white;
  &.backHover {
    box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
    opacity: 0.6;
  }
`;
const InfoConfirm = class InfoConfirm extends Component {
  constructor(props) {
    super(props);
    this.confirmInfo = this.confirmInfo.bind(this);
  }
  confirmInfo() {
    const {
      username,
      email,
      street_address,
      city,
      myState,
      zipcode,
      authid
    } = this.props;
    this.props.updateUser(
      username,
      email,
      street_address,
      city,
      myState,
      zipcode,
      authid
    );
  }
  render() {
    if (this.props.user && this.props.user.email && !this.props.loading) {
      return <Redirect to="/" />;
    }
    return (
      <InfoConfirmMain>
        <Header />
        <InfoConfirmBackground>
          <InfoConfirmForm>
            <InfoConfirmOutro>
              <InfoConfirmHead>Almost Done</InfoConfirmHead>
              Does this information look correct?
            </InfoConfirmOutro>
            <InfoConfirmStatusContainer className="pattern">
              <div>
                <InfoConfirmStatus>
                  User:
                  <InfoConfirmResults>{this.props.username}</InfoConfirmResults>
                </InfoConfirmStatus>
              </div>
              <div>
                <InfoConfirmStatus>
                  Email:
                  <InfoConfirmResults>{this.props.email}</InfoConfirmResults>
                </InfoConfirmStatus>
              </div>
              <div>
                <InfoConfirmStatus>
                  Address:
                  <InfoConfirmResults>
                    {this.props.street_address}
                  </InfoConfirmResults>
                </InfoConfirmStatus>
              </div>
              <div>
                <InfoConfirmStatus>
                  City:
                  <InfoConfirmResults>{this.props.city}</InfoConfirmResults>
                </InfoConfirmStatus>
              </div>
              <div>
                <InfoConfirmStatus>
                  State:
                  <InfoConfirmResults>{this.props.myState}</InfoConfirmResults>
                </InfoConfirmStatus>
              </div>
              <div>
                <InfoConfirmStatus>
                  <div>Zipcode:</div>
                  <InfoConfirmResults>{this.props.zipcode}</InfoConfirmResults>
                </InfoConfirmStatus>
              </div>
            </InfoConfirmStatusContainer>
            <InfoConfirmConfirm>
              {/* <Link to="/"> */}
              <FillerSpace />
              <BackButton onClick={this.confirmInfo}>Confirm</BackButton>
              <Link to="/">
                <BackButton className="backHover">Back</BackButton>
              </Link>
              {/* </Link> */}
            </InfoConfirmConfirm>
            <Filler />
          </InfoConfirmForm>
        </InfoConfirmBackground>
      </InfoConfirmMain>
    );
  }
};

const mapStateToProps = state => {
  return {
    authid: state.userReducer.user.authid,
    username: state.infoReducer.username,
    email: state.infoReducer.email,
    street_address: state.infoReducer.street_address,
    city: state.infoReducer.city,
    myState: state.infoReducer.myState,
    zipcode: state.infoReducer.zipcode,
    loading: state.userReducer.loading,
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(InfoConfirm);
