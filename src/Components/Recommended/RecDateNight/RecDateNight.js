import React, { Component } from "react";
import "../Recommended.css";
import { connect } from "react-redux";
import { getDates } from "../../../ducks/dateReducer";
import RecCard2 from "./RecCard2/RecCard2";
import {
  RecommendedCarrier,
  TitleCarrier,
  RecommendedTitle,
  ListCarrier,
  RecImage
} from "../Recommended";

class RecDateNight extends Component {
  componentDidMount() {
    const { user, getDates } = this.props;

    getDates(`Date+night+in+${user.city}+${user.state}`);
  }
  render() {
    const { dates } = this.props;

    let dateList = dates.map((date, index) => {
      return (
        <RecCard2
          key={index}
          name={date.name}
          id={date.id}
          address={date.formatted_address}
          rating={date.rating}
        />
      );
    });
    return (
      <RecommendedCarrier className="recommended__carrier">
        <TitleCarrier className="title__carrier">
          <RecommendedTitle className="recommendedTitle">{`Date night in ${
            this.props.user.city
          }, ${this.props.user.state}`}</RecommendedTitle>
        </TitleCarrier>
        <ListCarrier className="list__carrier">{dateList}</ListCarrier>
        <RecImage className="pageBreak" />
      </RecommendedCarrier>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.dateReducer,
    user: state.userReducer.user
  };
};
export default connect(
  mapStateToProps,
  { getDates }
)(RecDateNight);
