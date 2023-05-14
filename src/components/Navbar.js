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
        
    </nav>
</div>
  )
}

export default Navbar