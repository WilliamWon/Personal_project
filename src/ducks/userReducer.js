import axios from "axios";
const GET_USER = "GET_USER";
const UPDATE_USER = "UPDATE_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/me")
  };
}
export function updateUser(
  username,
  email,
  street_address,
  city,
  myState,
  zipcode,
  authid
) {
  return {
    type: UPDATE_USER,
    payload: axios
      .post(`/api/info/${authid}`, {
        username,
        email,
        street_address,
        city,
        myState,
        zipcode
      })
      .then(res => {
        console.log(res);
        return res.data[0];
      })
  };
}

const initialState = {
  user: {},
  loading: false
};

export default function userReducer(state = initialState, action) {
  console.log(action, state);
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${UPDATE_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${UPDATE_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    default:
      return state;
  }
}
