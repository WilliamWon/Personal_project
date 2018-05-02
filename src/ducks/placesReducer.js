import axios from "axios";
const GET_PLACES = "GET_PLACES";

export function getPlaces(keyword) {
  return {
    type: GET_PLACES,
    payload: axios.get(`/api/places?q=${keyword}`)
  };
}

const initialState = {
  places: []
};

export default function placesReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case `${GET_PLACES}_FULFILLED`:
      return {
        ...state,
        places: action.payload.data.results
      };
    default:
      return state;
  }
}
