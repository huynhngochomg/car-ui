import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import logoCar from '../../Assets/Images/logoCar.png'


const Navbar = () => {
  const [navbar, setNavbar] = useState('navbar')
  const [header, setHeader] = useState('header')
  const handleShowNavbar = () => {
    setNavbar('navbar showNavbar')
  }

  const handleCloseNavbar = () => {
    setNavbar('navbar')
  }

  const handleAddBG = () => {
    if(window.scrollY > 20) {
      setHeader('header addBg')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleAddBG)
  })

  return (
    <div className={header}>
      <div className='logoDiv'>
        <img src={logoCar} alt='Logo Image' className='logo' />
      </div>
      
      <div className={navbar}>
        <ul className='menu'>
          <li onClick={handleCloseNavbar} className='listItem'>
            <a href='/' className='link'>Used Cars</a>
          </li>
          <li onClick={handleCloseNavbar} className='listItem'>
            <a href='/' className='link'>New Cars</a>
          </li>
          <li onClick={handleCloseNavbar} className='listItem'>
            <a href='/' className='link'>Auctions</a>
          </li>
          <li onClick={handleCloseNavbar} className='listItem'>
            <a href='/' className='link'>Sell</a>
          </li>
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={handleCloseNavbar}/>
      </div>

      <div className='signUp flex'>
        <div className='text'>Sign Up</div>
        <TbGridDots className='icon toggleNavbarIcon' onClick={handleShowNavbar}/>
      </div>

    </div>
  )
}

export default Navbar
