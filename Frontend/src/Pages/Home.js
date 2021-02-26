import React from 'react';

import Recycler from '../Components/Recycler';
import Post from '../Components/Post';
import Sidebar from '../Components/Sidebar';

import '../Styles/home.scss';

import orion from '../Images/orion.jpg';
import kristin from '../Images/kristin.jpg';
import louvre from '../Images/louvre.jpg';
import coffee from '../Images/coffee.jpg';
import hands from '../Images/hands.png';
import model from '../Images/model.jpg';



class Home extends React.Component{
  render(){
    return(
      <>
      <Recycler  images = {[ coffee,  hands ,  model , orion ,kristin, louvre ]} />

      <div className = "content-container">
        <div className = "post-container">
          <Post/>
          <Post/>
          <Post/>
        </div>

        <div className = "sidebar-container">
          <Sidebar/>
        </div>

      </div>
      </>
    );
  }
}

export default Home;
