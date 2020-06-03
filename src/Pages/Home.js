import React from 'react';

import Recycler from '../Components/Recycler';
import Post from '../Components/Post';

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
      <Post/>
      <Post/>
      </>
    )
  }
}

export default Home;
