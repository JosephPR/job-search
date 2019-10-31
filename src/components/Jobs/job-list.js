import React from 'react';

import {Job} from './job'

export const JobList = (props) => {

  return (
    <tbody>
    {props.jobs.map(currentjob => {
      return <Job job={currentjob} deleteJob={props.deleteJob} key={currentjob._id}/>;
    })}
    </tbody>
)
};
