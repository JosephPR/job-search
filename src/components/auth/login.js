import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        errors: {}
      };
    }
    componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

    componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


handleChange = (e) => {
  this.setState({
  [e.target.name]: e.target.value
  });
};

onSubmit = (e) => {
  e.preventDefault();
  const { email, password } = this.state
  const userData = {
    email,
    password
  };
  this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
console.log(userData);
// window.location = "/dashboard"
};


  render() {
    const {errors, email, password } = this.state;
    return (
      <div className= "flex flex-col w-full h-12 items-center">
       <h3>Log In</h3>
       <p className="text-grey-700">
               Don't have an account? <Link className="text-green-600 hover:text-green-400" to="/register">Register</Link>
             </p>
       <form className="w-full max-w-sm" onSubmit={this.onSubmit}>

         <div className="">
           <label className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-position">Email: </label>
             <span className="red-text">
                   {errors.email}
                   {errors.emailnotfound}
                 </span>
           <input
             className={classnames("bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-teal-500", {
                    invalid: errors.email || errors.emailnotfound
                  })}
               name='email'
               value={email}
               error={errors.email}
               onChange={this.handleChange}
               type='email'
               />
         </div>
         <div className="">
           <label  className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-description">Password: </label>
             <span className="red-text">
                   {errors.password}
                   {errors.passwordincorrect}
                 </span>
           <input
            type="password"
               required
               className={classnames("bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-teal-500", {
                      invalid: errors.password || errors.passwordincorrect
                    })}               name='password'
               value={password}
               error={errors.password}
               onChange={this.handleChange}
               />
         </div>
           <br/>

           <input type="submit" value="Log In" className="px-2 py-1 rounded-lg bg-indigo-800 hover:bg-indigo-700 opacity-75  text-yellow-100 hover:text-yellow-400 text-xl font-light uppercase shadow-md hover:shadow-lg" />
       </form>
     </div>
    )
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
