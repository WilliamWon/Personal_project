import axios from "axios";
const GET_DATES = "GET_DATES";

export function getDates(keyword) {
  return {
    type: GET_DATES,
    payload: axios.get(`/api/dates?q=${keyword}`)
  };
}

const initialState = {
  dates: []
};

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_DATES}_FULFILLED`:
      return {
        ...state,
        dates: action.payload.data.results
      };
    default:
      return state;
  }
}
