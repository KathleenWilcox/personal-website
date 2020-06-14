import React from 'react';
import {Link } from 'react-router-dom';

import '../Styles/post.scss';

import Girl from '../Images/girl-with-book.jpg';



class Post extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        shareList: false
    };

    this.displayShareList = this.displayShareList.bind(this);
  }

  displayShareList(){
    this.setState ({
      shareList: !this.state.shareList
    });
  }

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
              <Link  to="/College">Beauty</Link>
              ,&nbsp;
              <Link to="/College">Lifestyle&nbsp;</Link>
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
              <Link to="/College">Read More</Link>
            </div>

            <div style = {{display: this.state.shareList ? 'none' : 'table-cell'}} className = "comment-div">
              <Link  to="/College"><i class="fas fa-comment-alt"></i></Link>
              <span class = "comment-count">10</span>
            </div>

            <div onClick = {this.displayShareList} style = {{display: this.state.shareList ? 'none' : 'table-cell'}} className = "share-icon">
              <i class="fas fa-share-alt"></i>
            </div>

            <div onClick = {this.displayShareList} style = {{display: this.state.shareList ? 'table-cell' : 'none'}} className = "close-button">
              <i class="fas fa-times"></i>
            </div>

            <div style = {{display: this.state.shareList ? 'table-cell' : 'none'}} className = "share-icon-list">
              <a href= "http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com" target="_blank" className = "share-soc" >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a href= "https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons"
              target="_blank"  className = "share-soc">
                <i class="fab fa-twitter"></i>
              </a>

              <a href= "https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" target="_blank"  className = "share-soc" >
                <i class="fab fa-pinterest-p"></i>
              </a>

              <a href= "mailto:?subject=Check out this post!&body=I found this article! https://everleigh.pixandhue.com/triple-images/" target="_blank"
              className = "share-soc" >
                <i class="far fa-envelope"></i>
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
