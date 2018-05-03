import React, { Component } from "react";
import "./RecBars.css";
import { connect } from "react-redux";
import { getBars } from "../../../ducks/barReducer";
import RecCard1 from "./RecCard1/RecCard1";

class RecBars extends Component {
  componentDidMount() {
    const { user, getBars } = this.props;

    getBars(`Bars+in+${user.city}`);
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
      <div>
        <div>Bars</div>
        {barList}
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
