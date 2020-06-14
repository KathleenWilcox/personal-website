import React from 'react'

import {Link } from 'react-router-dom';
import Home from '../Pages/Home'

import '../Styles/logo.css';

class Logo extends React.Component {
  render(){
    return(

      <div className = "logo-container" >

      <Link exact activeClassName="navbar__link--active" className="logo-link" to="/">Katie</Link>

      </div>
    );
  }
}
export default Logo;
