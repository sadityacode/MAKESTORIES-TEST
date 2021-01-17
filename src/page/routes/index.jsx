import React from "react";
import { Route } from "react-router-dom";

// routes
import Page from "../index";

const PageRoute = () => {
  const routes = (
    <>
      <Route path="/" exact render={props => <Page {...props} />} />
    </>
  );

  return routes;
};

export default PageRoute;
