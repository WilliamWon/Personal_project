import React, { Component } from "react";
import "../../RecCard.css";
import { Link } from "react-router-dom";

class RecCard1 extends Component {
  render() {
    const { name, address, rating, id } = this.props;
    return (
      <div>
        <div className="recName">{name}</div>
        <div className="recAddresss">{address}</div>
        <div className="recRating">{`Rating: ${rating}`}</div>
        <Link to={`/chat/${id}`}>
          <button className="recChat">Chat</button>
        </Link>
        <button className="recFavorite">Favorite</button>
      </div>
    );
  }
}

export default RecCard1;
