import React from "react";
import { Route } from "react-router-dom";

// routes
import UserPage from "../index";

const ProfilePageRoute = () => {
  const routes = (
    <>
      <Route path="/user/:uid" render={props => <UserPage {...props} />} />
    </>
  );

  return routes;
};

export default ProfilePageRoute;
