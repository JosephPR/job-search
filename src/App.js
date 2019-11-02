import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/navbar";
import JobsList from "./components/Jobs/jobs-list";
import EditJob from "./components/edit-job";
import Landing from "./components/landing"
import CreateJob from "./components/create-job";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import PrivateRoute from "./components/private-route/private-route";
import Dashboard from "./components/dashboard/dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

export default class App extends Component{
  render(){
    return (
    <Provider store={store}>
      <Router>
        <Navbar />
      <div className="flex flex-col w-full h-12 items-center bg-local" >
        <br/>
  <Route exact path="/" component={Landing} />
  <Route exact path="/register" component={Register} />
  <Route exact path="/login" component={Login} />
  <Switch>
      <PrivateRoute exact path="/edit/:id" component={EditJob} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/jobs" component={JobsList} />
      <PrivateRoute exact path="/create" component={CreateJob} />
  </Switch>
      </div>
      </Router>
    </Provider>

    );
  }
}
