import React from 'react';
import coffee from '../Images/coffee.jpg'
import hands from '../Images/hands.png'
import model from '../Images/model.jpg'
import '../Styles/featured.css';

class Featured extends React.Component{
  render(){
    return(
      <div className= "featured-container">

       <div class = "featured-img" >
        <img  src={coffee} alt="coffee" />
       </div>

         <div class = "featured-img" >
          <img  src={hands} alt="hands" />
         </div>

           <div class = "featured-img">
            <img src={model} alt="model" />
          </div>
      </div>
    );
  }
}
export default Featured;
