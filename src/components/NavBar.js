import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <div >
    <ul className="navItems" >
    <li><NavLink to="/">INICIO</NavLink></li>
    <li><NavLink to="/UseState">USE STATE</NavLink></li>
    <li><NavLink to="/UseEffect">USE EFFECT</NavLink></li>
    <li><NavLink to="/UseContext">USE CONTEXT</NavLink></li>

    </ul>
    </div>
  )
}

export default NavBar