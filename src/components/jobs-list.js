import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Job = props => (
  <tr className="bg-indigo-100 hover:bg-teal-100">
    <td className="border px-4 py-2">{props.job.company}</td>
    <td className="border px-4 py-2">{props.job.position}</td>
    <td className="border px-4 py-2">{props.job.description}</td>
    <td className="border px-4 py-2">{props.job.status}</td>
    <td className="border px-4 py-2">{props.job.date.substring(0,10)}</td>
    <td className="border px-4 py-2">
      <Link to={`/edit/${props.job._id}`}>edit</Link> | <a href="#" onClick={() => { props.deleteJob(props.job._id) }}>delete</a>
    </td>
  </tr>
)


export default class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
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

  jobList =() => {
  return this.state.jobs.map(currentjob => {
    return <Job job={currentjob} deleteJob={this.deleteJob} key={currentjob._id}/>;
  })
}

  render() {
    return (<div>
      <h3 className= "flex flex-col w-full h-12 items-center" >Logged Jobs</h3>
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
        <tbody>
          {this.jobList()}
        </tbody>
      </table>
    </div>)
  }
}
