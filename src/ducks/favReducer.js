import axios from "axios";
const GET_FAVORITES = "GET_FAVORITES";
const CREATE_FAVORITES = "CREATE_FAVORITES";
const DELETE_FAVORITES = "DELETE_FAVORITES";

export function getFavorites(userid) {
  return {
    type: GET_FAVORITES,
    payload: axios.get(`/api/favorites?q=${userid}`)
  };
}
export function createFavorites(name, address, rating, id, userid) {
  return {
    type: CREATE_FAVORITES,
    payload: axios.put(`api/favorites`, { name, address, rating, id, userid })
  };
}
export function deleteFavorites(name, address, rating, userid) {
  return {
    type: DELETE_FAVORITES,
    payload: axios.delete(`api/favorites`, { name, address, rating, userid })
  };
}
const initialState = {
  favorites: {}
};

export default function favReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_FAVORITES}_FULFILLED`:
      return {
        ...state,
        favorites: action.payload.data.results
      };
    case `${CREATE_FAVORITES}_FULFILLED`:
      return {
        ...state,
        favorites: action.payload.data.results
      };
    case `${DELETE_FAVORITES}_FULFILLED`:
      return {
        ...state,
        favorites: action.payload.data.results
      };
    default:
      return state;
  }
}
