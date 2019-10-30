import React from 'react';
import { Link } from 'react-router-dom';

export const Job = props => (
  <tr className="bg-indigo-100 hover:bg-teal-100 hover:text-purple-900">
    <td className="border px-4 py-2">{props.job.company}</td>
    <td className="border px-4 py-2">{props.job.position}</td>
    <td className="border px-4 py-2">{props.job.description}</td>
    <td className="border px-4 py-2">{props.job.status}</td>
    <td className="border px-4 py-2">{props.job.date.substring(0,10)}</td>
    <td className="border px-4 py-2">
      <Link to={`/edit/${props.job._id}`}>edit</Link> | <a href="/" onClick={() => { props.deleteJob(props.job._id) }}>delete</a>
    </td>
  </tr>
)
