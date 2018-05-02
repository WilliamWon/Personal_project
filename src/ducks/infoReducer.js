const initialState = {
  username: "",
  email: "",
  street_address: "",
  city: "",
  myState: "",
  zipcode: 0
};
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_MYSTATE = "UPDATE_MYSTATE";
const UPDATE_ZIP = "UPDATE_ZIP";

export default function infoReducer(state = initialState, action) {
  console.log("REDUCER HIT: Action ->", action);
  switch (action.type) {
    case `${UPDATE_USERNAME}`:
      return {
        ...state,
        username: action.payload
      };
    case `${UPDATE_EMAIL}`:
      return {
        ...state,
        email: action.payload
      };
    case `${UPDATE_ADDRESS}`:
      return {
        ...state,
        street_address: action.payload
      };
    case `${UPDATE_CITY}`:
      return {
        ...state,
        city: action.payload
      };
    case `${UPDATE_MYSTATE}`:
      return {
        ...state,
        myState: action.payload
      };
    case `${UPDATE_ZIP}`:
      return {
        ...state,
        zipcode: action.payload
      };
    default:
      return state;
  }
}

export function updateUserName(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
}
export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
}
export function updateAddress(street_address) {
  return {
    type: UPDATE_ADDRESS,
    payload: street_address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateMyState(myState) {
  return {
    type: UPDATE_MYSTATE,
    payload: myState
  };
}
export function updateZip(zipcode) {
  return {
    type: UPDATE_ZIP,
    payload: zipcode
  };
}
