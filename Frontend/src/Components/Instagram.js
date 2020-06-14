import React from 'react';
import '../Styles/sidebar.scss';

var url = 'https://www.instagram.com/katieroseeeee/';

class Instagram extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      posts_arr: []
    }
    this.getRecentPosts = this.getRecentPosts.bind(this);
  }

  componentDidMount(){

    this.getRecentPosts();
  }


  getRecentPosts(){

    let posts = [];

    const cheerio = require('cheerio');
    const axios = require('axios');
    axios.get(url).then(res => {
      const $ = cheerio.load(res.data);

      let script = $('script').eq(4).html();
      let split = script.split(',');
      let i = 0;
      let numposts = 0;


      for(i = 0; i < split.length; i++){
        if(split[i].includes("shortcode")){
          if(numposts < 4){
            numposts++;
            posts.push(split[i]);
          }
        }
      }

      for (i = 0; i < posts.length; i++){
        posts[i] = posts[i].split(':')[1].replace(/['"]+/g, '');
      }

      url = url + 'p/';
      for(i = 0; i < posts.length; i++ ){
        posts[i] = url + posts[i];
      }

      this.setState({
        posts_arr: posts
      });
        console.log(this.state.posts_arr);

    });

  }

  render(){
    return(
      <div className = "instagram-widget">
        <h4 className = "widget-title"> Follow On Instagram</h4>
        <ul className = "insta-widget-list">

        {this.state.posts_arr.map(post =>

          <li className = "insta-widget" >
            <a>

            </a>
          </li>
        )}


        </ul>
      </div>
    );
  }

}
export default Instagram;
