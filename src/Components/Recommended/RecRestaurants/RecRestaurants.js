import React, { Component } from "react";
import "../Recommended.css";
import { connect } from "react-redux";
import { getRestaurants } from "../../../ducks/restaurantReducer";
import RecCard4 from "./RecCard4/RecCard4";

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
      <div className="recommended__carrier">
        <div className="title__carrier">
          <div className="recommendedTitle">{`Restaurants in ${
            this.props.user.city
          }, ${this.props.user.state}`}</div>
        </div>
        <div className="list__carrier">{restaurantList}</div>
        <div className="recImage four" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.restaurantReducer,
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, { getRestaurants })(RecRestaurants);
