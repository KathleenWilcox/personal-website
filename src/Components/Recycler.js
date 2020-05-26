import React from 'react';
import Image from "./Image";
import '../Styles/slider.scss';

class Recycler extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      left : 0,
      mid : 1,
      right: 2,
      Xdir: 0
    };

    //bind functions to this class
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.renderImagesLeft= this.renderImagesLeft.bind(this);
    this.renderImagesRight = this.renderImagesRight.bind(this);

    //create image refs
    this.image1 = React.createRef();
    this.image2 = React.createRef();
    this.image3 = React.createRef();
  }

  leftClick(){

    this.setState ({
      left : this.state.left,
      mid : this.state.mid,
      right: this.state.right,
      Xdir: -1
    });


    this.image1.current.setWobble(-1);
    this.image2.current.setWobble(-1);
    this.image3.current.setWobble(-1);
  }


  renderImagesLeft(){


    this.image1.current.setWobble(0);
    this.image2.current.setWobble(0);
    this.image3.current.setWobble(0);

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
      right: right,
      Xdir: this.state.Xdir
    });
  }

  rightClick(){
    this.setState ({
      left : this.state.left,
      mid : this.state.mid,
      right: this.state.right,
      Xdir: 1
    });

    this.image1.current.setWobble(1);
    this.image2.current.setWobble(1);
    this.image3.current.setWobble(1);
  }

  renderImagesRight(){

    this.image1.current.setWobble(0);
    this.image2.current.setWobble(0);
    this.image3.current.setWobble(0);

    let left = this.state.left;
    let mid = this.state.mid;
    let right = this.state.right;

    left = left + 1;
    mid = mid + 1;
    right = right + 1;

    if(left > this.props.images.length - 1){
      left = 0;

    }else if(mid > this.props.images.length - 1) {
      mid = 0;

    }else if(right > this.props.images.length - 1){
      right = 0;
    }

    this.setState ({
      left: left,
      mid: mid,
      right: right,
      Xdir: this.state.Xdir
    });
  }


  createImagesDiv(){
    if(this.state.Xdir == -1){
      return(
        <div className = "slider" >

        <Image src = {this.props.images[this.state.left] } ref = {this.image1} renderFunction = { () => {} } />

        <Image  src = {this.props.images[this.state.mid] } ref = {this.image2}  renderFunction={this.renderImagesLeft}/>

        <Image src = {this.props.images[this.state.right] } ref = {this.image3}  renderFunction = { () => {} } />

        </div>
      );
    } else{
      return(
      <div className = "slider" >

      <Image src = {this.props.images[this.state.left] } ref = {this.image1}  renderFunction = { () => {} } />

      <Image  src = {this.props.images[this.state.mid] } ref = {this.image2}  renderFunction={this.renderImagesRight}/>

      <Image src = {this.props.images[this.state.right] } ref = {this.image3}  renderFunction = { () => {} }/>

      </div>
    );
    }

  }

  render(){
    return(
      <div  className = "slider-container">
      <div>
        <button id = "goLeft" onClick = {this.leftClick}> <i class="fa fa-angle-left"></i> </button>
      </div>

      {this.createImagesDiv()}

      <div>
        <button  id = "goRight" onClick = {this.rightClick}> <i class="fa fa-angle-right"></i> </button>
        </div>
      </div>
    );
  }
}
export default Recycler;
