import React from "react";
import { Route, Switch } from "wouter";
import Home from "../pages/Home/Home";
import { Routes } from "./routes";
import NotFound from "../pages/NotFound/NotFound";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path={Routes.Home}>
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Router;
