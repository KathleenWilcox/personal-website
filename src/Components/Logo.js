import React from 'react'
import '../Styles/logo.css';

class Logo extends React.Component {
  render(){
    return(

      <div className = "logo-container" >
      
      <a className = "logo-link" href = {'http://google.com'}>
          Katie
      </a>

      </div>
    );
  }
}
export default Logo;
