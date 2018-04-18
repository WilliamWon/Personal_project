import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./Components/Search/Search";
import LandingPage from "./Components/LandingPage/LandingPage";
import Favorites from "./Components/Favorites/Favorites";
import Categories from "./Components/Categories/Categories";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/search" component={Search} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/categories" component={Categories} />
  </Switch>
);
