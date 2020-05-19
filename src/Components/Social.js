import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest

} from '@fortawesome/free-brands-svg-icons';

export default function Social(){
return(  <div className = "soc-nav">
  <a
  href= "https://twitter.com/katieeroseeeee"
  className= "soc-icon"
  >
  <FontAwesomeIcon icon={faTwitter} size = "0.5x"/>
  </a>

  <a
  href= "https://www.instagram.com/katieroseeeee/?hl=en"
  className= "soc-icon"
  >
  <FontAwesomeIcon icon={faInstagram} size = "0.5x"/>
  </a>

  <a
  href= "https://www.pinterest.com/kathleenrwilcox/"
  className= "soc-icon"
  >
  <FontAwesomeIcon icon={faPinterest} size = "0.5x"/>
  </a>

  <a
  href= "https://www.pinterest.com/kathleenrwilcox/"
  className= "soc-icon"
  >
  <FontAwesomeIcon icon={faPinterest} size = "0.5x"/>
  </a>

  <a
  href= "https://www.facebook.com/katie.rose.wilcox?ref=bookmarks"
  className= "soc-icon"
  >
  <FontAwesomeIcon icon={faFacebook} size = "0.5x"/>
  </a>


  </div>
);
}
