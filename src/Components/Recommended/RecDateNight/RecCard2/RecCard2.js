import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  RecCard,
  RecName,
  RecAddress,
  RecRating,
  RecChat,
  RecFavorite
} from "../../RecCard";

class RecCard2 extends Component {
  render() {
    const { name, address, rating, id } = this.props;
    return (
      <RecCard className="recCardHover">
        <RecName>{name}</RecName>
        <RecAddress>{address}</RecAddress>
        <RecRating>{`Rating: ${rating}`}</RecRating>
        <Link to={`/chat/${id}`}>
          <RecChat>Chat</RecChat>
        </Link>
        <RecFavorite>Fave</RecFavorite>
      </RecCard>
    );
  }
}

export default RecCard2;
