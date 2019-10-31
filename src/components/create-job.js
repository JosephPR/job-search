import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateJob extends Component {
      state = {
        company: '',
        position: '',
        description: '',
        status: '',
        date: new Date(),
        jobs: []
      }


handleChange = (e) => {
  this.setState({
  [e.target.name]: e.target.value
  });
}

handleDateChange = (date) => {
  this.setState({
    date
  });
}

onSubmit = (e) => {
  e.preventDefault();
  const {company, position, description, status, date} = this.state
  const job = {
    company,
    position,
    description,
    status,
    date,
  };
console.log(job);

axios.post('http://localhost:5000/jobs/add', job)
  .then(res => console.log(res.data));

window.location = '/';
}

  render() {
    const {company, position, description, status, date} = this.state;
    return (
      <div className= "flex flex-col w-full h-12 items-center">
       <h3>Create New Job Log</h3>
       <form className="w-full max-w-sm" onSubmit={this.onSubmit}>
         <div className="">
           <label className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-company">Company: </label>
           <input
               required
               className="bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
               name='company'
               value={company}
               onChange={this.handleChange}>

           </input>
         </div>

         <div className="">
           <label className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-position">Position: </label>
           <input
               type="text"
               className="bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
               name='position'
               value={position}
               onChange={this.handleChange}
               />
         </div>
         <div className="">
           <label  className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-description">Description: </label>
           <input  type="text"
               required
               className="bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-800"
               name='description'
               value={description}
               onChange={this.handleChange}
               />
         </div>
         <div className="">
           <label  className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-description">Status: </label>
           <input  type="text"
               required
               className="bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-800"
               name='status'
               value={status}
               onChange={this.handleChange}
               />
         </div>

           <label className="block text-indigo-800 font-bold  mb-1 md:mb-0 pr-4" htmlFor="inline-position">Date: </label>
           <div>
             <DatePicker
             className="bg-teal-100 appearance-none border-2 border-teal-100 rounded w-full py-2 px-4 text-grey-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-800"

               selected={date}
               onChange={this.handleDateChange}
             />
           </div>
           <br/>

           <input type="submit" value="Create Job Log" className="px-2 py-1 rounded-lg bg-indigo-800 hover:bg-indigo-700 opacity-75  text-yellow-100 hover:text-yellow-400 text-xl font-light uppercase shadow-md hover:shadow-lg" />
       </form>
     </div>
    )
  }
}
