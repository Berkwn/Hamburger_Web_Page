import React from 'react'
NavLink
import Logo from '../assets/hamburgerlogo.png'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <nav className='navbar'>

    <div  className='left-side'>
        <img className='img' src={Logo} alt="logo" />
    </div>



    <div className='right-side'>

    <NavLink className='nav-link home'  to="">Home</NavLink>
    <NavLink className='nav-link menu' to="/menu">Menu</NavLink>
    <NavLink className='nav-link about' to="/about">About</NavLink>
    <NavLink className='nav-link contact' to="/contact">Contact</NavLink>
    </div>



    </nav>
    </>
  )
}
