import React from "react";

// Optum Home Page
import ProfilePageRoute from "../profilePage/routes";
import PageRoute from "../page/routes";

// merge all routes in allRoutesList array
const allRoutesList = () => [ProfilePageRoute(), PageRoute()];

// App route components
const routes = <>{allRoutesList()}</>;

export default routes;
