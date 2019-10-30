import React from 'react'

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="max-w-sm m-4 bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 placeholder:black"
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
     />
  )

}
