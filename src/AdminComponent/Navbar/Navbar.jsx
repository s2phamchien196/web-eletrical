
import React from 'react'
import "./Navbar.css"
import navLogo from "../assets/nav-logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='flex-grow-1'>
        <img src={navLogo} alt='' className='nav-logo' />
        <p className='text-danger text-start'>Admin Page</p>
      </div>
      <div className='nav-profile'>
        <Link to='/login'>
          <button className='login-bnt'>{'Login'}</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar