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
import { connect } from "react-redux";
import { createFavorites } from "../../../../ducks/favReducer";

class RecCard1 extends Component {
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

const mapStateToProps = state => {
  return {
    ...state.favReducer
  };
};

export default connect(
  mapStateToProps,
  { createFavorites }
)(RecCard1);
