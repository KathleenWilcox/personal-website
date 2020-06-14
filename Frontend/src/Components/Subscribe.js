import React from 'react';

import '../Styles/subscribe.scss';

class Subscribe extends React.Component{
  render(){
    return(
      <div className = "subscribe-container">
        <h4>
          Subscribe and lets be
          <span className = "accent"> friends</span>
        </h4>
        <input type = "name" name ="NAME" placeholder = "Name" required/>
        <input type = "email" name = "EMAIL" placeholder = "Email Address" required/>
        <button type = "button"> Subscribe</button>
      </div>
    );
  }
}
export default Subscribe;
