import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'
import './Search.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {

  useEffect(() => {
    Aos.init(
      {
        duration: 2000
      }
    )
  },[])


  return (
    <div className='search'>
      <div className='secContainer container'>
        <h3 data-aos='fade-up' className='title'>
          Which vihicle you are looking for
        </h3>

        <div className='searchDiv grid'>
          <input data-aos='fade-up' type='text' placeholder='Type'/>
          <input data-aos='fade-up' type='number' placeholder='Year'/>
          <input data-aos='fade-up' type='text' placeholder='Model'/>
          <input data-aos='fade-up' type='number' placeholder='Price'/>
          <button data-aos='fade-up' className='btn primaryBtn flex'>
            <HiOutlineSearch className='icon'/>
            <span>Search</span>
          </button>
        </div>

        
      </div>
      
    </div>
  )
}

export default Search
