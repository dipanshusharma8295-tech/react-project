import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav'>
      <h1 >Sheriyans</h1>
    <div className='nav-first'>
      <Link to='/home' >Home </Link>
      <Link to='/about' >About </Link>
      <Link to='/contact' >Contact </Link>
      <Link to='/product' >Product </Link>
    </div>
      
    </div>
  )
}

export default Navbar
