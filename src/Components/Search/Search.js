import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlaces } from "../../ducks/placesReducer";
import PlaceCard from "./PlaceCard/PlaceCard";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import "./Search.css";
import "../Recommended/Recommended.css";
import styled from "styled-components";
import { ListCarrier } from "../Recommended/Recommended";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
    this.getConfirm = this.getConfirm.bind(this);
  }

  getConfirm() {
    this.props.getPlaces(this.state.userInput);
  }

  typing(val) {
    let newVal = val.split(" ").join("+");
    console.log(newVal);
    this.setState({ userInput: newVal });
  }

  onSubmitHandler = e => {
    e.preventDefault();
    this.getConfirm();
  };

  render() {
    const { places } = this.props;
    console.log(this.props);
    let placesList = places.map((place, index) => {
      return (
        <PlaceCard
          key={index}
          name={place.name}
          id={place.id}
          address={place.formatted_address}
          rating={place.rating}
        />
      );
    });
    return (
      <div id="search">
        <SideNav />
        <Header />
        <div className="searchWrapper">
          <div className="search__stuff">
            <div className="search__thing">Search Here</div>
            <form onSubmit={this.onSubmitHandler}>
              <input
                className="keywordSearch"
                placeholder="Enter Keyword"
                onChange={e => this.typing(e.target.value)}
              />
              <button>Search</button>
            </form>
          </div>
          <ListCarrier>{placesList}</ListCarrier>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.placesReducer };
};

export default connect(
  mapStateToProps,
  { getPlaces }
)(Search);
