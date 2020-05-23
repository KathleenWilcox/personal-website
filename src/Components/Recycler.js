import React from 'react'
import Image from "./Image"
import '../Styles/slider.scss';

class Recycler extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      left : 0,
      mid : 1,
      right: 2,
    };

    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  leftClick(){

    let left = this.state.left;
    let mid = this.state.mid;
    let right = this.state.right;


    left = left - 1;
    mid = mid - 1;
    right = right - 1;

    if(left < 0){
      left = this.props.images.length - 1;

    }else if(mid < 0) {
      mid = this.props.images.length - 1;

    }else if(right < 0){
      right = this.props.images.length - 1;

    }

    this.setState ({
      left: left,
      mid: mid,
      right: right
    });

     console.log("left" + this.state.left + '\n' + "mid" + this.state.mid +'\n' + "right" + this.state.right );

  }

  rightClick(){

    let left = this.state.left;
    let mid = this.state.mid;
    let right = this.state.right;

    left = left + 1;
    mid = mid + 1;
    right = right + 1;

    if(left > this.props.images.length - 1 ){
        left = 0;

    }else if(mid > this.props.images.length - 1 ) {
        mid = 0;

    }else if(right > this.props.images.length - 1 ){
      right = 0;
    }

    this.setState ({
      left: left,
      mid: mid,
      right: right
     });

    console.log("left" + this.state.left + '\n' + "mid" + this.state.mid +'\n' + "right" + this.state.right );

  }

  render(){
    return(
      < div  className = "slider-container" >
      <div>
        <button id = "goLeft" onClick = {this.leftClick}> <i class="fa fa-angle-left"></i> </button>
      </div>

      <div className = "slider" >
      
      <Image src = {this.props.images[this.state.left] } />

      <Image  src = {this.props.images[this.state.mid] } />

      <Image src = {this.props.images[this.state.right] } />
      </div>

      <div>
        <button  id = "goRight" onClick = {this.rightClick}> <i class="fa fa-angle-right"></i> </button>
        </div>

      </div>
    );
  }
}
export default Recycler;
