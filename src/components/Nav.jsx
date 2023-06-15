import React from 'react'
import { NavLink } from "react-router-dom";
import './nav.css';
const Nav = () => {
  return (
      <div className="links">
        <NavLink to="/">Longitudnal</NavLink>
        <NavLink to="/transverse">Transverse</NavLink>
        <NavLink to="/loads">Loads</NavLink>
      </div>
  )
}

export default Nav
