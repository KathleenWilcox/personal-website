import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/navbar.css';
import Social from './Social'

class NavBar extends React.Component {
  render(){
    return(
      <nav className="navbar">
      <ul>
        <li>
        <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/"
        >
          College
        </NavLink>
        </li>

        <li>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/Products"
        >
          Products
        </NavLink>
        </li>

        <li>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/Contact"
        >
          About
        </NavLink>
        </li>

        <li className = "soc-nav">
        <Social/>
        </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
