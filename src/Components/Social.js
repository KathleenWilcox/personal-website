import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../Styles/navbar.css';

import{
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest

} from '@fortawesome/free-brands-svg-icons';

class Social extends React.Component {
  render(){
    return(
      <div className = "social-follow">
      <ul>
      <li>
      <a href= "https://twitter.com/katieeroseeeee" className= "soc-icon">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      </li>

      <li>
      <a href= "https://www.instagram.com/katieroseeeee/?hl=en" className= "soc-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      </li>

      <a href= "https://www.pinterest.com/kathleenrwilcox/" className= "soc-icon" >
        <FontAwesomeIcon icon={faPinterest} />
      </a>

      <li>
      <a href= "https://www.facebook.com/katie.rose.wilcox?ref=bookmarks" className= "soc-icon">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      </li>
      </ul>
      </div>
    );
  }
}
export default Social;
