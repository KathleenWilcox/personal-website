  import React from 'react'

  function Image({src}){
    let imgStyles = {
      width: 100 + "%",
      height: "auto"
    }
    return <img  src={src} alt="slide image" style = {imgStyles}/>
  }
  export default Image;
