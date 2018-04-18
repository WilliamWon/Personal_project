import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./ducks/userReducer";
import restaurantReducer from "./ducks/restaurantReducer";
// import favoritesReducer from "./ducks/favoritesReducer";

const store = createStore(
  combineReducers({
    userReducer,
    restaurantReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
