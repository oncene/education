import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentHome1 from "./features/StudentHome1"
import Home from "./features/Home"

const Routes=()=> {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/StudentHome" component={StudentHome1} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
