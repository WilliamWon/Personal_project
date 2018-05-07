import React, { Component } from "react";
import "../Recommended.css";
import { connect } from "react-redux";
import { getDates } from "../../../ducks/dateReducer";
import RecCard2 from "./RecCard2/RecCard2";

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
      <div>
        <div className="recommendedTitle">{`Date night in ${
          this.props.user.city
        }, ${this.props.user.state}`}</div>
        {dateList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.dateReducer,
    user: state.userReducer.user
  };
};
export default connect(mapStateToProps, { getDates })(RecDateNight);
