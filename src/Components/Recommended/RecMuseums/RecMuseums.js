import React, { Component } from "react";
import "../Recommended.css";
import { connect } from "react-redux";
import { getMuseums } from "../../../ducks/museumReducer";
import RecCard3 from "./RecCard3/RecCard3";

class RecMuseums extends Component {
  componentDidMount() {
    const { user, getMuseums } = this.props;

    getMuseums(`Museums+in+${user.city}+${user.state}`);
  }
  render() {
    const { museums } = this.props;

    let museumList = museums.map((museum, index) => {
      return (
        <RecCard3
          key={index}
          name={museum.name}
          id={museum.id}
          address={museum.formatted_address}
          rating={museum.rating}
        />
      );
    });
    return (
      <div className="recommended__carrier">
        <div className="title__carrier">
          <div className="recommendedTitle">{`Museums in ${
            this.props.user.city
          }, ${this.props.user.state}`}</div>
        </div>
        <div className="list__carrier">{museumList}</div>
        <div className="recImage three" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.museumReducer,
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, { getMuseums })(RecMuseums);
