import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';

export default function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
    </Router>
  );
}