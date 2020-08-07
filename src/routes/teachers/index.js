import React from "react";
import {Route, Switch} from "react-router-dom";

import Dashboard from "./dashboard/index.js";
import Home from "./dashboard/home.js";


const Main = ({match}) => (
  <Switch>
    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
    <Route path={`${match.url}/home`} component={Home}/>
  </Switch>
);

export default Main;
