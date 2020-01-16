import React from "react";
import { Link, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Route path="/" component={Home} exact></Route>
      <Route path="/signin" component={SignIn}></Route>
    </>
  );
}

export default App;
