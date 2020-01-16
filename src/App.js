import React from "react";
import { Route, Switch } from "react-router-dom";

// pages
import Home from './pages/Home';
import CreateUser from './pages/User/Create';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    // TODO: 많이 쌓이면 routes.js 로 분리
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/create" component={CreateUser} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default App;
