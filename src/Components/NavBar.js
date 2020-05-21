import React from 'react';
import {Link } from 'react-router-dom';
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
              <li><Link exact activeClassName="navbar__link--active" className="navbar__link" to="/">College</Link></li>

              <li><Link activeClassName="navbar__link--active" className="navbar__link" to="/Products">Products</Link></li>

              <li> <Link activeClassName="navbar__link--active" className="navbar__link" to="/About">About</Link> </li>
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
