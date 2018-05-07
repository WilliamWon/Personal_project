import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../RecCard.css";

class RecCard4 extends Component {
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

export default RecCard4;
