import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div id="logo__carrier">
        <div className="spacer" />
        <div className="logo side">VENT</div>
        <div className="spacer2" />
      </div>
      <div className="linkCarrier">
        <a>
          <button className="sideNav__links">ABOUT</button>
        </a>
        <a>
          <button className="sideNav__links">SEARCH</button>
        </a>
        <a>
          <button className="sideNav__links">FAVORITES</button>
        </a>
        <a href={process.env.REACT_APP_LOGOUT}>
          <button className="sideNav__links">LOGOUT</button>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
