import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import history from "../history";

import Page from "../page";
import UserPage from "../profilePage";

const Routes = () => (
  <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    <Switch>
      <Route path="/" exact render={props => <Page {...props} />} />
      <Route path="/user/:uid" render={props => <UserPage {...props} />} />
    </Switch>
  </Router>
);

export default Routes;
