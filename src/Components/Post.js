import React from 'react';
import {Link } from 'react-router-dom';

import '../Styles/post.scss';

import Girl from '../Images/girl-with-book.jpg';



class Post extends React.Component{
  render(){
    return(
      <div className = "post-container">
        <div className = "post-content">
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
            <div className = "categories">
              <Link activeClassName="navbar__link--active" className="" to="/College">Beauty</Link>
              ,&nbsp;
              <Link activeClassName="navbar__link--active" className="" to="/College">Lifestyle&nbsp;</Link>
            </div>

            <span className = "divider">/</span>

            <div className = "location"> New York, NY </div>

            <h2>
              Getting Organized
            </h2>
          </div>

          <div className = "post-excerpt-container">
            <p>
              Quis eleifend quam adipiscing vitae proin sagittis nisl rh oncus. Rutrum tellus pelle ntesque eu tincidunt. Nunc mi ipsum faucibus vitae.
              Maecenas sed enim ut sem viverra aliq uet eget sit amet. Placerat in egestas erat imperdiet sed. A pellentesque sit amet porttitor eget dolor.
              Nibh praesent tristique magna sit amet purus gravida quis. Cursus vitaes[...]
            </p>

          <div className = "post-footer">
            <div className="read-more-button">
              <Link activeClassName="navbar__link--active" className="" to="/College">Read More</Link>
            </div>

            <div className = "comment-div">
              <Link activeClassName="navbar__link--active" className="" to="/College"><i class="fas fa-comment-alt"></i></Link>
              <span class = "comment-count">10</span>
            </div>

            <div className = "share-icon">
              <i class="fas fa-share-alt"></i>
            </div>

            <div className = "close-button">
              <i class="fas fa-times"></i>
            </div>

            <div className = "share-icon-list">
              <a href= "https://www.facebook.com/katie.rose.wilcox?ref=bookmarks" target="_blank" className = "share-soc" >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a href= "https://twitter.com/katieeroseeeee" target="_blank"  className = "share-soc">
                <i class="fab fa-twitter"></i>
              </a>

              <a href= "https://www.pinterest.com" target="_blank"  className = "share-soc" >
                <i class="fab fa-pinterest-p"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Post;
