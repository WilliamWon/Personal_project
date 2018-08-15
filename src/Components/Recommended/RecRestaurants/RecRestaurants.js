import React, { Component } from "react";
import "../Recommended.css";
import { connect } from "react-redux";
import { getRestaurants } from "../../../ducks/restaurantReducer";
import RecCard4 from "./RecCard4/RecCard4";
import {
  RecommendedCarrier,
  TitleCarrier,
  RecommendedTitle,
  ListCarrier,
  RecImage
} from "../Recommended";

class RecRestaurants extends Component {
  componentDidMount() {
    const { user, getRestaurants } = this.props;

    getRestaurants(`Restaurants+in+${user.city}+${user.state}`);

    console.log(user.city);
  }
  render() {
    const { restaurants } = this.props;

    let restaurantList = restaurants.map((restaurant, index) => {
      return (
        <RecCard4
          key={index}
          name={restaurant.name}
          id={restaurant.id}
          address={restaurant.formatted_address}
          rating={restaurant.rating}
        />
      );
    });
    return (
      <RecommendedCarrier>
        <TitleCarrier>
          <RecommendedTitle>{`Restaurants in ${this.props.user.city}, ${
            this.props.user.state
          }`}</RecommendedTitle>
        </TitleCarrier>
        <ListCarrier>{restaurantList}</ListCarrier>
        <RecImage className="pageBreak" />
      </RecommendedCarrier>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.restaurantReducer,
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  { getRestaurants }
)(RecRestaurants);
