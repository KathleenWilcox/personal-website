import React, {useState} from 'react';
import Image from './Image';
import coffee from '../Images/coffee.jpg'
import hands from '../Images/hands.png'
import model from '../Images/model.jpg'
import '../Styles/slider.scss';


function Slider(){
    let slider_arr = [
      <Image src= {coffee} />,
      <Image src= {hands} />,
      <Image src= {model} />
    ];

    const [x, setX] = useState(0);
    const goLeft = () => {
      //setX(x+100);
      x ===  0 ? setX(-100 * (slider_arr.length-1)) : setX( x+100 );
    };
    const goRight  = () => {
      //setX(x-100);
      x ===  -100 * (slider_arr.length-1) ? setX(0): setX( x-100 );
    };

    return(
<div className = "slider-container">
      <div>
      <button id = "goLeft" onClick = {goLeft}> <i class="fa fa-angle-left"></i> </button>
      </div>



      <div className = "slider">

      {slider_arr.map((item,index) => {
        return(
          <div key = "index" className = "slide" style = {{transform: `translateX(${x}%)`}}>
          {item}
          </div>
        );
      })}

      </div>

      <div>
      <button id = "goRight" onClick = {goRight}> <i class="fa fa-angle-right"></i> </button>
      </div>

      </div>
     );
}
export default Slider;
