import React, { Component } from "react";
import "../../Recommended/RecCard.css";
import { Link } from "react-router-dom";
import { createFavorites } from "../../../ducks/favReducer";
import { connect } from "react-redux";
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
  addToFavorite() {
    const { createFavorites, name, address, rating, id, userid } = this.props;
    createFavorites(name, address, rating, id, userid);
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
        <button onClick={this.addToFavorite} className="recFavorite">
          Fave
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.favoritesReducer
  };
};

export default connect(
  mapStateToProps,
  { createFavorites }
)(PlaceCard);
