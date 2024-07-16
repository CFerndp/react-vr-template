import React, { lazy } from "react";
import { Route, Switch } from "wouter";
import { Routes } from "./routes";

const Home = lazy(() => import("../pages/Home/Home"));
const VR = lazy(() => import("../pages/VR/VR"));
const TwoD = lazy(() => import("../pages/TwoD/TwoD"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path={Routes.Home}>
        <Home />
      </Route>
      <Route path={Routes.VR}>
        <VR />
      </Route>
      <Route path={Routes["2D"]}>
        <TwoD />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Router;
