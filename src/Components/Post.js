import React from 'react';

import '../Styles/post.scss';
import Girl from '../Images/girl-with-book.jpg';



class Post extends React.Component{
  render(){
    return(
      <div className = "parent">
        <div className = "post-container">
        <>
          <div className = "post-date">
            <div className = "undated-post-date">
              <div className = "day">10</div>
              <div className = "month"> Jun</div>
              <div className = "year">2019 </div>
            </div>
          </div>


          <img className = "post-img" src = {Girl} />



          </>

          <div className= "post-header">
            Getting Organized
          </div>

          <div className = "post-excerpt-container">
            <p>
              Quis eleifend quam adipiscing vitae proin sagittis nisl rh oncus. Rutrum tellus pelle ntesque eu tincidunt. Nunc mi ipsum faucibus vitae.
              Maecenas sed enim ut sem viverra aliq uet eget sit amet. Placerat in egestas erat imperdiet sed. A pellentesque sit amet porttitor eget dolor.
              Nibh praesent tristique magna sit amet purus gravida quis. Cursus vitaes[...]
            </p>
         </div>
        </div>
        </div>
    );
  }
}

export default Post;
