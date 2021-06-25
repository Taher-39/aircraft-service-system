import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import AirTickets from './Components/AirTickets/AirTickets';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddFlightRoutes from './Components/Dashboard/AddFlightRoutes/AddFlightRoutes';
import AddTickets from './Components/Dashboard/AddTickets/AddTickets';
import BookingStatus from './Components/Dashboard/BookingStatus/BookingStatus';

export const userContext = createContext()

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
          <PrivateRoute path="/getTickets/:id">
            <AirTickets></AirTickets>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/bookingStatus">
            <BookingStatus></BookingStatus>
          </Route>
          <Route path="/addRoutes">
            <AddFlightRoutes></AddFlightRoutes>
          </Route>
          <Route path="/addTickets">
            <AddTickets></AddTickets>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          </Switch>
      </Router>
    </userContext.Provider>
  );
}