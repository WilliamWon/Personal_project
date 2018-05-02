import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../ducks/userReducer";
import "./LandingPage.css";
import Information from "../Information/Information";
import Login from "../Login/Login";

class LandingPage extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props.user);
    return (
      <div>
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
