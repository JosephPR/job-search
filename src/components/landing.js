import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div className= "flex flex-col w-full items-center">
            <img src="/big-eye.png" className="fill-current h-15 w-15" alt="eye"/>
            <h2 className="text-2xl font-serif items-center text-center">Welcome to the place for all you job tracking needs!<br />
             <br /> Sort and filter all of your applications by company, status or date applied.<br /> <br /> Sign in or register to get started. </h2>
            <br />
            <div className="">
              <Link
                to="/register"
              className="px-2 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 opacity-75  text-yellow-100 hover:text-yellow-400 text-xl font-light uppercase shadow-md hover:shadow-lg"
              >
                Register
              </Link>
            </div>
            <div className="p-2">
              <Link
                to="/login"
            className="px-2 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 opacity-75  text-yellow-100 hover:text-yellow-400 text-xl font-light uppercase shadow-md hover:shadow-lg"
              >
                Log In
              </Link>
            </div>
          </div>
    );
  }
}
export default Landing;
