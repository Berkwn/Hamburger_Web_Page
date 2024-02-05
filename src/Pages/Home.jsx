import React from 'react'
import Banner from '../assets/banner.jpg'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
  <>

    {/* <img className='banner' src={Banner} alt="banner" /> */}

    <div className='homecontent' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>

            <h1>Burger 333</h1>
            <p>Delicious Hamgurger <br />
            with 33 Spicy Mixed</p>
             <NavLink to='/menu'>
             <button className='btn btn-success button'>Order Now</button>
             </NavLink>
             
        </div>
    </div>
  </>
  )
}
