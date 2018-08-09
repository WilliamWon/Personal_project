import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";
import "./LandingPage.css";
import Information from "../Information/Information";
import Login from "../Login/Login";
import RecBars from "../Recommended/RecBars/RecBars";
import RecDateNight from "../Recommended/RecDateNight/RecDateNight";
import RecMuseums from "../Recommended/RecMuseums/RecMuseums";
import RecRestaurants from "../Recommended/RecRestaurants/RecRestaurants";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import styled from "styled-components";

const LoginSuccess = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
`;
const LandingWrapper = styled.div`
  margin-top: 10vh;
  margin-left: 206px;
  z-index: -10;
`;
const SectionE = styled.section`
  width: auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url(../../images/restaurant.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-attachment: fixed;
`;
const IntroBox = styled.div`
  width: auto;
  height: 20vh;
  padding-left: 40px;
  padding-right: 40px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Introduction = styled.div`
  font-size: 5em;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  color: rgb(34, 34, 34);
`;
class LandingPage extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props.user);
    return (
      <div id="landingPage">
        {this.props.user.first_name ? (
          this.props.user.first_name && this.props.user.email ? (
            <LoginSuccess id="loginSuccess">
              <Header />
              <SideNav />
              <LandingWrapper id="landingWrapper">
                <SectionE class="section-e">
                  {/* <video>
                  <source src="" type="video/mp4"/>e
                </video> */}
                  <IntroBox className="intro__box">
                    <Introduction className="introduction">{`What's up ${
                      this.props.user.first_name
                    }?`}</Introduction>
                  </IntroBox>
                </SectionE>
                <RecRestaurants />
                <RecBars />
                <RecMuseums />
                <RecDateNight />
              </LandingWrapper>
            </LoginSuccess>
          ) : (
            <Information />
          )
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.userReducer };
};

export default connect(
  mapStateToProps,
  { getUser }
)(LandingPage);
