import React, { Component } from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";

class SideNav extends Component {
  render() {
    return (
      <div className="sideNav">
        <div id="logo__carrier">
          <div className="spacer" />
          <div className="logo side">VENT</div>
          <div className="spacer2" />
        </div>
        <div className="linkCarrier">
          <Link to="/">
            <button className="sideNav__links">HOME</button>
          </Link>
          <Link to="/search">
            <button className="sideNav__links">SEARCH</button>
          </Link>
          <Link to="/favorites">
            <button className="sideNav__links">FAVORITES</button>
          </Link>
          <a href={process.env.REACT_APP_LOGOUT}>
            <button className="sideNav__links">LOGOUT</button>
          </a>
        </div>
      </div>
    );
  }
}

export default SideNav;
