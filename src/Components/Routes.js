import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Results from "./Results";

function Routes() {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path="/search">
          <Results />
        </Route>
        <Route path="/images">
          <Results />
        </Route>
        <Route path="/news">
          <Results />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
