import React, { Component } from "react";
import "../../Recommended/RecCard.css";
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
      <div className="recCard">
        <div className="recName">{name}</div>
        <div className="recAddress">{address}</div>
        <div className="recRating">{`Rating: ${rating}`}</div>
        <Link to={`/chat/${id}`}>
          <button className="recChat">Chat</button>
        </Link>
        <button className="recFavorite">Fave</button>
      </div>
    );
  }
}
export default PlaceCard;
