import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      College
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Products"
    >
      Products
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Contact"
    >
      About
    </NavLink>
  </nav>

);

export default Navbar;
