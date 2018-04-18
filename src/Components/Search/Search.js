import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurants } from "../../ducks/restaurantReducer";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      userInput: ""
    };
    this.getConfirm = this.getConfirm.bind(this);
  }

  getConfirm() {
    this.props.getRestaurants(this.state.userInput);
  }

  typing(val) {
    console.log(val);
    this.setState({ userInput: val });
  }

  render() {
    // const {userInput, restaurants} = this.state;
    // let restList = restaurants.filter((e,i) => {
    //     if(!userInput) {
    //       return null;
    //     }else if (e.name.includes(userInput)){
    //       return e;
    //     }
    //   }).map(restaurant => {
    //     let id =
    //   })
    return (
      <div>
        <p>Search Here</p>
        <input
          placeholder="Enter Keyword"
          onChange={e => this.typing(e.target.value)}
        />
        <button onClick={this.getConfirm}>Search</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { ...state.restaurantReducer };
};

export default connect(mapStateToProps, { getRestaurants })(Search);
