import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
            <div id="loginSuccess">
              <Header />
              <SideNav />
              <div id="landingWrapper">
                <section class="section-e">
                  {/* <video>
                  <source src="" type="video/mp4"/>e
                </video> */}
                  <div className="intro__box">
                    <div className="introduction">{`What's up ${
                      this.props.user.first_name
                    }?`}</div>
                  </div>
                </section>
                <RecRestaurants />
                <RecBars />
                <RecMuseums />
                <RecDateNight />
              </div>
            </div>
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

export default connect(mapStateToProps, { getUser })(LandingPage);
