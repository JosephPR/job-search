import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-pink-900 p-6 opacity-75">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="/big-eye.png" className="fill-current h-10 w-10 mr-2" alt="eye"/>
          <Link to="/"><span className="font-semibold text-xl tracking-tight text-teal-300">Job Eye</span></Link>
          <div className='pl-4'>
            <Link to="/jobs" className="block mt-4 lg:inline-block text-lg lg:mt-0 text-teal-200 hover:text-white mr-4">
              Job List
            </Link>
            </div>
        </div>
        <div className="justify-end pl-3w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm">
            <Link to="/create" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-teal-200 hover:text-white mr-4">
              Add Company
            </Link>
            <Link to="/register" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-teal-200 hover:text-white mr-4">
              Register
            </Link>
            <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-lg text-teal-200 hover:text-white mr-4">
              Log In
            </Link>

          </div>
        </div>
      </nav>
    );
  }
}
