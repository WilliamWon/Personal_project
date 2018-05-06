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
      <div
        // name="myForm"
        // action="/action_page.php"
        // onsubmit="return validateForm()"
        // method="post"
        id="infoInput"
      >
        <Header />
        <div id="infoInput__background">
          <div className="infoInput__container">
            <div className="infoInput__intro">
              <div className="infoInput__head">WELCOME</div>
              Let us get to know you a little better...
            </div>
            <div className="infoInput__sections">
              <input
                className="infoInputArea username"
                placeholder="Desired Display Name"
                type="text"
                onChange={e => updateUserName(e.target.value)}
              />
              <input
                className="infoInputArea email"
                placeholder="Primary Email"
                type="text"
                onChange={e => updateEmail(e.target.value)}
              />
              <input
                className="infoInputArea address"
                placeholder="Home Address"
                type="text"
                onChange={e => updateAddress(e.target.value)}
              />
              <div className="cityState">
                <input
                  className="infoInputArea city"
                  placeholder="City"
                  type="text"
                  onChange={e => updateCity(e.target.value)}
                />
                <input
                  className="infoInputArea state"
                  placeholder="State"
                  type="text"
                  onChange={e => updateMyState(e.target.value)}
                />
              </div>
              <input
                className="infoInputArea zipcode"
                placeholder="Zipcode"
                type="number"
                onChange={e => updateZip(e.target.value)}
              />
            </div>
            <div className="infoInput__confirm__container">
              <Link to="/confirm">
                <button className="infoInput__confirm">
                  <span>Complete</span>
                </button>
              </Link>
            </div>
            <div className="filler" />
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, {
  updateUserName,
  updateEmail,
  updateAddress,
  updateCity,
  updateMyState,
  updateZip
})(Information);
