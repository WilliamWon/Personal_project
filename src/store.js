import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import infoReducer from "./ducks/infoReducer";
import userReducer from "./ducks/userReducer";
import placesReducer from "./ducks/placesReducer";
import chatReducer from "./ducks/chatReducer";
// import favoritesReducer from "./ducks/favoritesReducer";

const store = createStore(
  combineReducers({
    userReducer,
    placesReducer,
    infoReducer,
    chatReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
