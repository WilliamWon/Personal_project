import axios from "axios";
const GET_MUSEUMS = "GET_MUSEUMS";

export function getMuseums(keyword) {
  return {
    type: GET_MUSEUMS,
    payload: axios.get(`/api/museums?q=${keyword}`)
  };
}

const initialState = {
  museums: []
};

export default function museumReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_MUSEUMS}_FULFILLED`:
      return {
        ...state,
        museums: action.payload.data.results
      };
    default:
      return state;
  }
}
