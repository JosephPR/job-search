import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-pink-900 p-6 opacity-75">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="/big-eye.png" className="fill-current h-10 w-10 mr-2" />
          <Link to="/"><span className="font-semibold text-xl tracking-tight text-teal-300">Job Eye</span></Link>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Job List
            </Link>
            <Link to="/create" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Add Company
            </Link>

          </div>
        </div>
      </nav>
    );
  }
}
