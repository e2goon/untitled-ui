import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import CreateUser from './pages/User/Create';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user/create" component={CreateUser} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default App;
