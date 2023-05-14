import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='nav-bar'>
    <a href='/' className='logo'>
        <h2>CHURCH WEBSITE</h2>
    </a>
    <nav>
        <a href='/sundays' >SUNDAYS</a>
        <a href='/#steps'>NEXT STEPS</a>
        <a href='#groups'>JOIN GROUP</a>
        <a href='#about'>ABOUT</a>
        <a href='#serve'>SERVE</a>
        <a href='#contact'>CONTACT</a>
    </nav>
</div>
  )
}

export default Navbar