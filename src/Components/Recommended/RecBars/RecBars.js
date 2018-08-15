import React, { Component } from "react";
import "../Recommended.css";
import { connect } from "react-redux";
import { getBars } from "../../../ducks/barReducer";
import RecCard1 from "./RecCard1/RecCard1";
import {
  RecommendedCarrier,
  TitleCarrier,
  RecommendedTitle,
  ListCarrier,
  RecImage
} from "../Recommended";

class RecBars extends Component {
  componentDidMount() {
    const { user, getBars } = this.props;

    getBars(`Bars+in+${user.city}+${user.state}`);
  }
  render() {
    const { bars } = this.props;

    let barList = bars.map((bar, index) => {
      return (
        <RecCard1
          key={index}
          name={bar.name}
          id={bar.id}
          address={bar.formatted_address}
          rating={bar.rating}
        />
      );
    });
    return (
      <RecommendedCarrier>
        <TitleCarrier>
          <RecommendedTitle>{`Bars in ${this.props.user.city}, ${
            this.props.user.state
          }`}</RecommendedTitle>
        </TitleCarrier>
        <ListCarrier>{barList}</ListCarrier>
        <RecImage className="pageBreak" />
      </RecommendedCarrier>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.barReducer,
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  { getBars }
)(RecBars);
