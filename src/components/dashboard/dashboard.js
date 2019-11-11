import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div className="flex flex-col w-full items-center">
        <div className="">
          <div className="inline-flex items-center justify-center">
            <h4 className="text-2xl font-serif items-center text-center">
              <b>Hey there,</b>
              {user.name}!
              <p className="flow-text grey-text text-darken-1">
                Your Logged in,
                <br />
                Add a company to your job List!
              </p>
            </h4>
          </div>
        </div>
        <br />
        <button
          onClick={this.onLogoutClick}
          className="px-2 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 opacity-75 text-yellow-100 hover:text-yellow-400 text-xl font-light uppercase shadow-md hover:shadow-lg"
        >
          Logout
        </button>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ auth: state.auth });
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
