  import React from 'react';
  import '../Styles/Image.scss';

  class Image extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        wobble: 0
      };
    }

    setWobble(val){
      this.setState({
        wobble: val
      });
    }

    render(){
      return (
      <img
        className="Image"
        src={ this.props.src }
        alt="slide image"
        onAnimationEnd={this.props.renderFunction}
        wobble={this.state.wobble}
      />
    );
  }
}
export default Image;
