import React from 'react'
import './navbar.css'

const Navbar = ({isScrolling}) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo'onClick={toTheTop}>Inicio</div>
    </nav>
  )
}

export default Navbar