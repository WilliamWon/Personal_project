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
    const { name, address, rating, id, open } = this.props;
    return (
      <div className="card">
        <div className="card__name__carrier">
          <div className="card__name">{name}</div>
        </div>
        <div className="card__line" />
        <div className="card__address__carrier">
          <div className="card__address">{address}</div>
          <Link to={`/chat/${id}`}>
            <button> Chat </button>
          </Link>
          <button>Favorite</button>
        </div>
        <div className="card__rating__carrier">
          <div className="card__rating">{`Rating: ${rating}`}</div>
        </div>
      </div>
    );
  }
}
export default PlaceCard;
