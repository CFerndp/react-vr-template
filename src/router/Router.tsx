import React from "react";
import { Route, Switch } from "wouter";
import Home from "../pages/Home/Home";
import { Routes } from "./routes";
import NotFound from "../pages/NotFound/NotFound";
import VR from "../pages/VR/VR";
import TwoD from "../pages/TwoD/TwoD";

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
