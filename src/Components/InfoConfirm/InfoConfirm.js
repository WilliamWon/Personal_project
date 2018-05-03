import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { updateUser } from "../../ducks/userReducer";

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
      <div>
        <p>Does this information look correct?</p>
        <div>
          <div>
            User: <p>{this.props.username}</p>
          </div>
        </div>
        <div>
          <div>
            Email: <p>{this.props.email}</p>
          </div>
        </div>
        <div>
          <div>
            Address: <p>{this.props.street_address}</p>
          </div>
        </div>
        <div>
          <div>
            City: <p>{this.props.city}</p>
          </div>
        </div>
        <div>
          <div>
            State: <p>{this.props.myState}</p>
          </div>
        </div>
        <div>
          <div>
            Zipcode: <p>{this.props.zipcode}</p>
          </div>
        </div>
        {/* <Link to="/"> */}
        <button onClick={this.confirmInfo}>Confirm</button>
        {/* </Link> */}
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
