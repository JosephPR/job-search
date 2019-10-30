// src/App.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import JobsList from "./components/Jobs/jobs-list";
import EditJob from "./components/edit-job";
import CreateJob from "./components/create-job";
function App() {
  return (
    <Router>
      <Navbar />
    <div className="flex flex-col w-full h-12 items-center bg-local" >
      <br/>
<Route path="/" exact component={JobsList} />
<Route path="/edit/:id" component={EditJob} />
<Route path="/create" component={CreateJob} />

    </div>
    </Router>
  );
}

export default App
