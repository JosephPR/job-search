import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
      };
    }


handleChange = (e) => {
  this.setState({
  [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  const {name, email, password, password2 } = this.state
  const newUser = {
    name,
    email,
    password,
    password2
  };
console.log(newUser);
};


  render() {
    const {errors,name, email, password, password2 } = this.state;
    return (
      <div className= "flex flex-col w-full h-12 items-center">
       <h3>Register</h3>
       <p className="text-grey-700">
               Already have an account? <Link className="text-green-600 hover:text-green-400" to="/login">Log in</Link>
             </p>
       <form className="w-full max-w-sm" onSubmit={this.onSubmit}>

         <div className="">
           <label className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-position">Name: </label>
           <input
               type="text"
               className="bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
               name='name'
               value={name}
               error={errors.name}
               onChange={this.handleChange}
               />
         </div>
         <div className="">
           <label className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-position">Email: </label>
           <input
               className="bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
               name='email'
               value={email}
               error={errors.email}
               onChange={this.handleChange}
               type='email'
               />
         </div>
         <div className="">
           <label  className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-description">Password: </label>
           <input
            type="password"
               required
               className="bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-800"
               name='password'
               value={password}
               error={errors.password}
               onChange={this.handleChange}
               />
         </div>
         <div>
           <label  className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-description">Confirm Password: </label>
           <input
               required
               className="bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-800"
               name='password2'
               value={password2}
               error={errors.password2}
               onChange={this.handleChange}
               type="password"
               />
         </div>

           <br/>

           <input type="submit" value="Sign Up" className="px-2 py-1 rounded-lg bg-indigo-800 hover:bg-indigo-700 opacity-75  text-yellow-100 hover:text-yellow-400 text-xl font-light uppercase shadow-md hover:shadow-lg" />
       </form>
     </div>
    )
  }
}
