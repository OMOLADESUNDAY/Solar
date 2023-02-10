import React, { useState } from 'react'
import { BiMenu} from 'react-icons/bi';
import {TiTimes } from "react-icons/ti";
import Logo from '../image/Star.png';
import { Link } from 'react-router-dom'

import "./navbar.css"
const Navbar = () => {
  const [show, setShow]=useState(false)
  const togglerHandler = () => {
    setShow(!show)
    const checkSize = window.addEventListener('resize', () => {
      if (window.screen.width > 600) {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener('resize',checkSize)
    }
      
    
  }
  return (
    <section className="navbarWrapper">
      <nav className="navbarContainer container">
        <div className="logoContainer">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navListWrapper">
          <ul className={show ? "showmenu" : "navListContainer"}>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/rate">Rate us</Link>
            </li>
          </ul>
          <div className="togglerBtn" onClick={togglerHandler}>
            {show ? <TiTimes /> : <BiMenu />}
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar