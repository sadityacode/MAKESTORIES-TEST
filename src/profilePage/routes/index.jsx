import React from "react";
import { Route } from "react-router-dom";

// routes
import ProfilePage from "../index";

const ProfilePageRoute = () => {
  const routes = (
    <>
      <Route path="/user/:uid" render={props => <ProfilePage {...props} />} />
    </>
  );

  return routes;
};

export default ProfilePageRoute;
