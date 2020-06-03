import React from 'react';

import '../Styles/post.scss';
import Girl from '../Images/girl-with-book.jpg';



class Post extends React.Component{
  render(){
    return(


        <div className = "post-container">



        <div className = "post-date">
        <div className = "undated-post-date">
          <div className = "day">10</div>
          <div className = "month"> Jun</div>
          <div className = "year">2019 </div>
        </div>
        </div>


        <img className = "post-img" src = {Girl} />





        </div>
    );
  }
}

export default Post;
