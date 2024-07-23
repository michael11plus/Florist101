import React from 'react'
import { useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import '../css/styles/navbar.min.css'
import logo from '../assets/images/floral-logo.png'

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (

    <header className='navbar'>
        <img className='nav--logo' src={logo}/>
        <nav ref={navRef} >
          <a href="/#">Home</a>
          <a href="/#">Photos</a>
          <a href="/#">Contact</a>
          <button className='nav--btn nav--closebtn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav--btn' onClick={showNavbar}>
            <FaBars />
          </button>
    </header>
  )
}

export default Navbar