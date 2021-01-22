import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Search } from "./pages";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </Router>
  );
};

export default App;
