import React, { Component } from "react";
import "./PlaceCard.css";
import { Link } from "react-router-dom";

class PlaceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
      // display: false
    };
  }
  handleSwitch() {
    this.setState({ display: true });
  }
  render() {
    const { name, address, rating, id } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{address}</div>
        <div>{`Rating: ${rating}`}</div>
        <Link to={`/chat/${id}`}>
          <button> Chat </button>
        </Link>
        <button>Favorite</button>
      </div>
    );
  }
}
export default PlaceCard;
