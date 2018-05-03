import axios from "axios";
const GET_BARS = "GET_BARS";

export function getBars(keyword) {
  return {
    type: GET_BARS,
    payload: axios.get(`/api/bars?q=${keyword}`)
  };
}

const initialState = {
  bars: []
};

export default function barReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case `${GET_BARS}_FULFILLED`:
      return {
        ...state,
        bars: action.payload.data.results
      };
    default:
      return state;
  }
}
