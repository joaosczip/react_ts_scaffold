import React from "react";
import { BrowserRouter, Switch, Route as Router } from "react-router-dom";
import GlobalStyles from "@/presentation/styles/global";

const Route: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Router to="/" render={() => <h1>Hello React</h1>} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Route;
