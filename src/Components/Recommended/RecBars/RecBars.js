import React, { Component } from "react";
import "../Recommended.css";
import { connect } from "react-redux";
import { getBars } from "../../../ducks/barReducer";
import RecCard1 from "./RecCard1/RecCard1";

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
      <div className="recommended__carrier">
        <div className="title__carrier">
          <div className="recommendedTitle">{`Bars in ${
            this.props.user.city
          }, ${this.props.user.state}`}</div>
        </div>
        <div className="list__carrier">{barList}</div>
        <div className="recImage one" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.barReducer,
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, { getBars })(RecBars);
