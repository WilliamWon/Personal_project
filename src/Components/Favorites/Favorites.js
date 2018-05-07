import React, { Component } from "react";
import "./Favorites.css";
import Header from "../Header/Header";

class Favorites extends Component {
  render() {
    return (
      <div className="FavoritesPage">
        <Header />
        <div id="classHeader">
          <p>Favorites</p>
        </div>
        <p>This is the favorites Page</p>
      </div>
    );
  }
}

export default Favorites;
