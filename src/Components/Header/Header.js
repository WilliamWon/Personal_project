import React, { Component } from "react";
import "./Header.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div id="header">
        {this.props.user.first_name ? (
          <div className="header__container">
            <div className="header__filler" />
            <Link to="/">
              <div className="logo">VENT</div>
            </Link>
            <a href={process.env.REACT_APP_LOGOUT}>
              <button className="header__log out">LOGOUT</button>
            </a>
          </div>
        ) : (
          <div className="header__container">
            <div className="header__filler" />
            <Link to="/">
              <div className="logo">VENT</div>
            </Link>
            <a href={process.env.REACT_APP_LOGIN}>
              <button className="header__log in">LOGIN</button>
            </a>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.userReducer };
};

export default connect(mapStateToProps)(Header);
