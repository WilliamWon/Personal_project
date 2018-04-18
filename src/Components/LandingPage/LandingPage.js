import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../ducks/userReducer";
import "./LandingPage.css";

import Login from "../Login/Login";

class LandingPage extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props.user);
    return (
      <div>
        {this.props.user.name ? (
          <div>
            <p className="logo">VENT</p>
            <p>{`What's up ${this.props.user.name}?`}</p>
            <a href={process.env.REACT_APP_LOGOUT}>
              <button>Logout</button>
            </a>
            <Link to="/search">
              <button>Search</button>
            </Link>
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { ...state.userReducer };
};

export default connect(mapStateToProps, { getUser })(LandingPage);
