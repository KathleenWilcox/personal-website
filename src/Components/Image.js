  import React from 'react';
  import '../Styles/Image.scss';

  class Image extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        dir: 0
      };
    }

    slideDirection(val){
      this.setState({
        dir: val
      });
    }

    render(){
      return (
      <img
        className={this.props.hidden ? "hidden-Image" : "Image"}
        src={ this.props.src }
        alt="slide image"
        onAnimationEnd={this.props.renderFunction}
        dir={this.state.dir}
      />
    );
  }
}
export default Image;
