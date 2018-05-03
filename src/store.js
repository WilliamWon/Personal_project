import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import infoReducer from "./ducks/infoReducer";
import userReducer from "./ducks/userReducer";
import placesReducer from "./ducks/placesReducer";
import chatReducer from "./ducks/chatReducer";
import barReducer from "./ducks/barReducer";
import dateReducer from "./ducks/dateReducer";
import restaurantReducer from "./ducks/restaurantReducer";
import museumReducer from "./ducks/museumReducer";
// import favoritesReducer from "./ducks/favoritesReducer";

const store = createStore(
  combineReducers({
    userReducer,
    placesReducer,
    infoReducer,
    chatReducer,
    barReducer,
    dateReducer,
    restaurantReducer,
    museumReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
