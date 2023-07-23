import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import './Search.css'

const Search = () => {
  return (
    <div className='search'>
      <div className='secContainer container'>
        <h3 className='title'>
          Which vihicle you are looking for
        </h3>

        <div className='searchDiv grid'>
          <input type='text' placeholder='Type'/>
          <input type='number' placeholder='Year'/>
          <input type='text' placeholder='Model'/>
          <input type='number' placeholder='Price'/>
          <button className='btn primaryBtn flex'>
            <HiOutlineSearch className='icon'/>
            <span>Search</span>
          </button>
        </div>

        
      </div>
      
    </div>
  )
}

export default Search
