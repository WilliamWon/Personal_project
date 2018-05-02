import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./Components/Search/Search";
import LandingPage from "./Components/LandingPage/LandingPage";
import Favorites from "./Components/Favorites/Favorites";
import Chat from "./Components/Chat/Chat";
import InfoConfirm from "./Components/InfoConfirm/InfoConfirm";
// import Categories from "./Components/Categories/Categories";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/search" component={Search} />
    <Route path="/chat/:id" component={Chat} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/confirm" component={InfoConfirm} />
  </Switch>
);
