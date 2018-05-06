import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { updateUser } from "../../ducks/userReducer";
import Header from "../Header/Header";
import "./InfoConfirm.css";

class InfoConfirm extends Component {
  constructor(props) {
    super(props);
    this.confirmInfo = this.confirmInfo.bind(this);
  }
  confirmInfo() {
    const {
      username,
      email,
      street_address,
      city,
      myState,
      zipcode,
      authid
    } = this.props;
    this.props.updateUser(
      username,
      email,
      street_address,
      city,
      myState,
      zipcode,
      authid
    );
  }
  render() {
    if (this.props.user && this.props.user.email && !this.props.loading) {
      return <Redirect to="/" />;
    }
    return (
      <div id="infoConfirm">
        <Header />
        <div className="infoConfirm__form">
          <div className="infoConfirm__outro">
            Does this information look correct?
          </div>
          <div className="infoConfirm__status__container">
            <div>
              <div className="infoConfirm__status">
                User:{" "}
                <div className="infoConfirm__results">
                  {this.props.username}
                </div>
              </div>
            </div>
            <div>
              <div className="infoConfirm__status">
                Email:{" "}
                <div className="infoConfirm__results">{this.props.email}</div>
              </div>
            </div>
            <div>
              <div className="infoConfirm__status">
                Address:{" "}
                <div className="infoConfirm__results">
                  {this.props.street_address}
                </div>
              </div>
            </div>
            <div>
              <div className="infoConfirm__status">
                City:{" "}
                <div className="infoConfirm__results">{this.props.city}</div>
              </div>
            </div>
            <div>
              <div className="infoConfirm__status">
                State:{" "}
                <div className="infoConfirm__results">{this.props.myState}</div>
              </div>
            </div>
            <div>
              <div className="infoConfirm__status">
                <div>Zipcode:</div>{" "}
                <div className="infoConfirm__results">{this.props.zipcode}</div>
              </div>
            </div>
          </div>
          <div className="infoConfirm__confirm__container">
            {/* <Link to="/"> */}
            <button className="infoInput__confirm" onClick={this.confirmInfo}>
              Confirm
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authid: state.userReducer.user.authid,
    username: state.infoReducer.username,
    email: state.infoReducer.email,
    street_address: state.infoReducer.street_address,
    city: state.infoReducer.city,
    myState: state.infoReducer.myState,
    zipcode: state.infoReducer.zipcode,
    loading: state.userReducer.loading,
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, { updateUser })(InfoConfirm);
