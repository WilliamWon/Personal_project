import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlaces } from "../../ducks/placesReducer";
import PlaceCard from "./PlaceCard/PlaceCard";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

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
        <Header />
        <p>Search Here</p>
        <form onSubmit={this.onSubmitHandler}>
          <input
            className="keywordSearch"
            placeholder="Enter Keyword"
            onChange={e => this.typing(e.target.value)}
          />
          <button>Search</button>
        </form>
        <div className="card__container">{placesList}</div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.placesReducer };
};

export default connect(mapStateToProps, { getPlaces })(Search);
