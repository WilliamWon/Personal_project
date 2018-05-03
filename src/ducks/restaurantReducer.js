import axios from "axios";
const GET_RESTAURANTS = "GET_RESTAURANTS";

export function getRestaurants(keyword) {
  return {
    type: GET_RESTAURANTS,
    payload: axios.get(`/api/restaurants?q=${keyword}`)
  };
}

const initialState = {
  restaurants: []
};

export default function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_RESTAURANTS}_FULFILLED`:
      return {
        ...state,
        restaurants: action.payload.data.results
      };
    default:
      return state;
  }
}
