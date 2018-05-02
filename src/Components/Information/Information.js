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
      <div>
        <div>
          <p>Let us get to know you a little better</p>
          <input
            placeholder="Desired Display Name"
            type="text"
            onChange={e => updateUserName(e.target.value)}
          />
          <input
            placeholder="Primary Email"
            type="text"
            onChange={e => updateEmail(e.target.value)}
          />
          <input
            placeholder="Home Address"
            type="text"
            onChange={e => updateAddress(e.target.value)}
          />
          <input
            placeholder="City"
            type="text"
            onChange={e => updateCity(e.target.value)}
          />
          <input
            placeholder="State"
            type="text"
            onChange={e => updateMyState(e.target.value)}
          />
          <input
            placeholder="Zipcode"
            type="number"
            onChange={e => updateZip(e.target.value)}
          />
          <Link to="/confirm">
            <button>Complete</button>
          </Link>
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
