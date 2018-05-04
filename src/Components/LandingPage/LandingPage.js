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

class LandingPage extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props.user);
    return (
      <div className="landingPage">
        {this.props.user.first_name ? (
          this.props.user.first_name && this.props.user.email ? (
            <div>
              <div className="logo">VENT</div>
              <p>{`What's up ${this.props.user.first_name}?`}</p>
              <a href={process.env.REACT_APP_LOGOUT}>
                <button>Logout</button>
              </a>
              <Link to="/search">
                <button>Search</button>
              </Link>
              <RecRestaurants />
              <RecBars />
              <RecMuseums />
              <RecDateNight />
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
