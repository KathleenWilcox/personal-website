import React from 'react'
import '../Styles/navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{
  faSearch
}from '@fortawesome/free-solid-svg-icons';


class SearchBar extends React.Component{
  render(){
    return(
        <div className = "search-component">

        <label className= "search-label" for="s"> search</label>

        <input className ="search-input" type="text" placeholder=""/>

        <button className = "search-button" type= "submit">
        <i class="fas fa-search"></i>
        </button>

        </div>
    );
  }
}
export default SearchBar;
