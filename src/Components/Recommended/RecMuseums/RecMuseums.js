import React, { Component } from "react";
import "../Recommended.css";
import { connect } from "react-redux";
import { getMuseums } from "../../../ducks/museumReducer";
import RecCard3 from "./RecCard3/RecCard3";
import {
  RecommendedCarrier,
  TitleCarrier,
  RecommendedTitle,
  ListCarrier,
  RecImage
} from "../Recommended";

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
      <RecommendedCarrier>
        <TitleCarrier>
          <RecommendedTitle>{`Museums in ${this.props.user.city}, ${
            this.props.user.state
          }`}</RecommendedTitle>
        </TitleCarrier>
        <ListCarrier>{museumList}</ListCarrier>
        <RecImage className="pageBreak" />
      </RecommendedCarrier>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.museumReducer,
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  { getMuseums }
)(RecMuseums);
