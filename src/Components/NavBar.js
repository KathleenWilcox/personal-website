import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/navbar.css';
import Social from './Social';
import SearchBar from './SearchBar';

class NavBar extends React.Component {
  render(){
    return(
      <div className= "menu-container">


      <div className = "search-container">
      <SearchBar/>
      </div>

      <nav className="navbar">
            <ul>
              <li><NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/">College</NavLink></li>

              <li><NavLink activeClassName="navbar__link--active" className="navbar__link" to="/Products">Products</NavLink></li>

              <li> <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/Contact">About</NavLink> </li>
            </ul>
      </nav>

    <div className = "soc-container">
      <Social/>
    </div>

    </div>
    );
  }
}
export default NavBar;
