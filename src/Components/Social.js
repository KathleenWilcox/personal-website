import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../Styles/navbar.css';

import{
  faTwitter,
  faInstagram,

} from '@fortawesome/free-brands-svg-icons';

class Social extends React.Component {
  render(){
    return(
      <div className = "social-follow">
      <ul>
      <li>
      <a href= "https://twitter.com/katieeroseeeee" target="_blank" className= "soc-icon">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      </li>

      <li>
      <a href= "https://www.instagram.com/katieroseeeee/?hl=en" target="_blank" className= "soc-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      </li>

      <a href= "https://www.pinterest.com/kathleenrwilcox/" target="_blank" className= "soc-icon" >
        <i class="fab fa-pinterest-p"></i>
      </a>

      <li>
      <a href= "https://www.facebook.com/katie.rose.wilcox?ref=bookmarks" target="_blank" className= "soc-icon">
        <i class="fab fa-facebook-f"></i>
      </a>
      </li>
      </ul>
      </div>
    );
  }
}
export default Social;
