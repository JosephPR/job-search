// src/App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/navbar";
import JobsList from "./components/Jobs/jobs-list";
import EditJob from "./components/edit-job";
import Landing from "./components/landing"
import CreateJob from "./components/create-job";
import Register from "./components/auth/register";
import Login from "./components/auth/login";


export default class App extends Component{
  render(){
    return (
    <Provider store={store}>
      <Router>
        <Navbar />
      <div className="flex flex-col w-full h-12 items-center bg-local" >
        <br/>
  <Route path="/" exact component={Landing} />
  <Route path="/jobs" component={JobsList} />
  <Route path="/edit/:id" component={EditJob} />
  <Route path="/create" component={CreateJob} />
  <Route path="/register" component={Register} />
  <Route path="/login" component={Login} />

      </div>
      </Router>
    </Provider>

    );
  }
}
