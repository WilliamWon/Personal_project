import React, { Component } from "react";
import "./Favorites.css";
import Header from "../Header/Header";
import styled from "styled-components";

const FavPage = styled.div`
  height: 100%;
  width: 100%;
`;
const FavHeader = styled.div`
  height: auto;
  width: 100%;
`;
class Favorites extends Component {
  render() {
    return (
      <FavPage>
        <Header />
        <FavHeader>
          <p>Favorites</p>
        </FavHeader>
        <p>This is the favorites Page</p>
      </FavPage>
    );
  }
}

export default Favorites;
