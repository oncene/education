import React from "react";
import {Route, Switch} from "react-router-dom";

import Dashboard from "./dashboard/index.js";
import Home from "./dashboard/home.js";
import Activity from "./dashboard/Activity.js";
import Exam from "./dashboard/Exam.js";
import Presentation from "./dashboard/Presentation.js";
import Group from "./dashboard/Group.js";
import Collaboration from "./dashboard/Collaboration.js";
import Conferences from "./dashboard/Conferences.js";
import Ratings from "./dashboard/Ratings.js";

const Main = ({match}) => (
  <Switch>
    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
    <Route path={`${match.url}/home`} component={Home}/>
    <Route path={`${match.url}/activity`} component={Activity}/>
    <Route path={`${match.url}/exam`} component={Exam}/>
    <Route path={`${match.url}/presentation`} component={Presentation}/>
    <Route path={`${match.url}/group`} component={Group}/>
    <Route path={`${match.url}/collaboration`} component={Collaboration}/>
    <Route path={`${match.url}/conferences`} component={Conferences}/>
    <Route path={`${match.url}/ratings`} component={Ratings}/>
  </Switch>
);

export default Main;
