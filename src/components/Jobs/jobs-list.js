import React, {Component} from 'react';
import axios from 'axios';
import  { JobList } from './job-list';
import { SearchBox } from './searchbox';

export default class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      searchField: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/jobs/').then(response => {
      this.setState({jobs: response.data});
    }).catch((error) => {
      console.log(error);
    })
  }

  deleteJob = (id) => {
    axios.delete(`http://localhost:5000/jobs/${id}`)
    .then(res => console.log(res.data));
    this.setState({
      jobs: this.state.jobs.filter(el => el._id !== id)
    })
  }


  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { jobs, searchField } = this.state;
    const filteredJobs = jobs.filter(job =>
        job.company.toLowerCase().includes(searchField.toLowerCase())
      )
        return (
      <div  className= "flex flex-col w-full h-12 items-center">
      <h3  >Logged Jobs</h3>
        <SearchBox
             placeholder="Search Company's"
             handleChange={this.handleChange}
               />
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-indigo-900">Company</th>
            <th className="px-4 py-2 text-indigo-900">Position</th>
            <th className="px-4 py-2 text-indigo-900">Description</th>
            <th className="px-4 py-2 text-indigo-900">Status</th>
            <th className="px-4 py-2 text-indigo-900">Date</th>
          </tr>
        </thead>
        <JobList jobs={filteredJobs} />
      </table>
    </div>)
  }
}
