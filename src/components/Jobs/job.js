import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Job = props => (
  <tr className="bg-indigo-100 hover:bg-teal-100 hover:text-purple-900">
    <td className="border px-4 py-2">{props.job.company}</td>
    <td className="border px-4 py-2">{props.job.position}</td>
    <td className="border px-4 py-2">{props.job.description}</td>
    <td className="border px-4 py-2">{props.job.status}</td>
    <td className="border px-4 py-2">{props.job.date.substring(5,10)}-{props.job.date.substring(2,4)}</td>
    <td className="border px-4 py-2">
      <Link to={`/edit/${props.job._id}`}><FontAwesomeIcon className="text-blue-900 hover:text-blue-600" icon={faEdit} /></Link> | <a href="/" onClick={() => { props.deleteJob(props.job._id) }}><FontAwesomeIcon className="text-purple-900 hover:text-red-600" icon={faTrashAlt} /></a>
    </td>
  </tr>
)
