import React from 'react';
import Image from "./Image";
import '../Styles/slider.scss';

class Recycler extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      hiddenLeft: this.props.images.length - 1,
      left : 0,
      mid : 1,
      right: 2,
      hiddenRight: 3,
      Xdir: 0,
    };

    //bind functions to this class
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.renderImagesLeft= this.renderImagesLeft.bind(this);
    this.renderImagesRight = this.renderImagesRight.bind(this);

    //create image refs
    this.image0 = React.createRef();
    this.image1 = React.createRef();
    this.image2 = React.createRef();
    this.image3 = React.createRef();
    this.image4 = React.createRef();
  }

  leftClick(){

    let oldXdir = this.state.Xdir;

    this.setState ({
      hiddenLeft : this.state.hiddenLeft,
      left : this.state.left,
      mid : this.state.mid,
      right: this.state.right,
      hiddenRight: this.state.hiddenRight,
      Xdir: -1
    });

    if(oldXdir === -1 ) {

      this.image0.current.slideDirection(-1);
      this.image1.current.slideDirection(-1);
      this.image2.current.slideDirection(-1);
      this.image3.current.slideDirection(-1);

    } else {
      this.image4.current.slideDirection(-1);
      this.image3.current.slideDirection(-1);
      this.image2.current.slideDirection(-1);
      this.image1.current.slideDirection(-1);
    }
  }


  renderImagesLeft(){

    this.image0.current.slideDirection(0);
    this.image1.current.slideDirection(0);
    this.image2.current.slideDirection(0);
    this.image3.current.slideDirection(0);
    this.image4.current.slideDirection(0);

    let hiddenLeft = this.state.hiddenLeft;
    let left = this.state.left;
    let mid = this.state.mid;
    let right = this.state.right;
    let hiddenRight = this.state.hiddenRight;

    hiddenLeft = hiddenLeft - 1;
    left = left - 1;
    mid = mid - 1;
    right = right - 1;
    hiddenRight = hiddenRight - 1;

    if(hiddenLeft < 0 ){
      hiddenLeft = this.props.images.length - 1;

    } else if(left < 0){
      left = this.props.images.length - 1;

    }else if(mid < 0) {
      mid = this.props.images.length - 1;

    }else if(right < 0){
      right = this.props.images.length - 1;

    }else if(hiddenRight < 0){
      hiddenRight = this.props.images.length - 1;
    }

    this.setState ({
      hiddenLeft: hiddenLeft,
      left: left,
      mid: mid,
      right: right,
      hiddenRight: hiddenRight,
      Xdir: this.state.Xdir,
    });
  }

  rightClick(){

    let oldXdir = this.state.Xdir;

    this.setState ({
      hiddenLeft : this.state.hiddenLeft,
      left : this.state.left,
      mid : this.state.mid,
      right: this.state.right,
      hiddenRight: this.state.hiddenRight,
      Xdir: 1
    });


    if( oldXdir === 1 || oldXdir === 0){

      this.image1.current.slideDirection(1);
      this.image2.current.slideDirection(1);
      this.image3.current.slideDirection(1);
      this.image4.current.slideDirection(1);

    } else {
      this.image0.current.slideDirection(1);
      this.image1.current.slideDirection(1);
      this.image2.current.slideDirection(1);
      this.image3.current.slideDirection(1);
    }
  }

  renderImagesRight(){

    this.image0.current.slideDirection(0);
    this.image1.current.slideDirection(0);
    this.image2.current.slideDirection(0);
    this.image3.current.slideDirection(0);
    this.image4.current.slideDirection(0);


    let hiddenLeft = this.state.hiddenLeft;
    let left = this.state.left;
    let mid = this.state.mid;
    let right = this.state.right;
    let hiddenRight = this.state.hiddenRight;

    hiddenLeft = hiddenLeft + 1;
    left = left + 1;
    mid = mid + 1;
    right = right + 1;
    hiddenRight = hiddenRight +  1;

    if(hiddenLeft > this.props.images.length - 1 ){
      hiddenLeft = 0;

    }else if(left > this.props.images.length - 1){
      left = 0;

    }else if(mid > this.props.images.length - 1) {
      mid = 0;

    }else if(right > this.props.images.length - 1){
      right = 0;

    }else if(hiddenRight > this.props.images.length - 1){
      hiddenRight = 0;
    }

    this.setState ({
      hiddenLeft: hiddenLeft,
      left: left,
      mid: mid,
      right: right,
      hiddenRight: hiddenRight,
      Xdir: this.state.Xdir
    });
  }


  createImagesDiv(){
    if(this.state.Xdir === -1){
      return(
        <div className = "slider-left" >

        <Image hidden = {true} src = {this.props.images[this.state.hiddenRight] } ref = {this.image4} renderFunction = { () => {} } />

        <Image hidden = {false} src = {this.props.images[this.state.right] } ref = {this.image3}  renderFunction = { () => {} } />

        <Image  hidden = {false} src = {this.props.images[this.state.mid] } ref = {this.image2}  renderFunction={this.renderImagesLeft}/>

        <Image hidden = {false} src = {this.props.images[this.state.left] } ref = {this.image1} renderFunction = { () => {} } />

        <Image  hidden = {true} src = {this.props.images[this.state.hiddenLeft] } ref = {this.image0} renderFunction = { () => {} } />

        </div>
      );
    } else{
      return(
        <div className = "slider-right" >

        <Image  hidden = {true} src = {this.props.images[this.state.hiddenLeft] } ref = {this.image0} renderFunction = { () => {} } />

        <Image hidden = {false} src = {this.props.images[this.state.left] } ref = {this.image1}  renderFunction = { () => {} } />

        <Image  hidden = {false} src = {this.props.images[this.state.mid] } ref = {this.image2}  renderFunction={this.renderImagesRight}/>

        <Image hidden = {false} src = {this.props.images[this.state.right] } ref = {this.image3}  renderFunction = { () => {} }/>

        <Image hidden = {true} src = {this.props.images[this.state.hiddenRight] } ref = {this.image4} renderFunction = { () => {} } />

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
