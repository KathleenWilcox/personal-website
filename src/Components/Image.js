  import React from 'react';
  import '../Styles/slider.scss';

  function Image({src}){
    let imgStyles = {
      width: 33 + "%",
      height: "auto"
    }
    return <img  className = "slide" src={src} alt="slide image" />
  }
  export default Image;
