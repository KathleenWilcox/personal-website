import React from 'react';

import Recycler from '../Components/Recycler';
import Post from '../Components/Post';

import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.jpg';
import coffee from '../Images/coffee.jpg';
import hands from '../Images/hands.png';
import model from '../Images/model.jpg';



class Home extends React.Component{
  render(){
    return(
      <>
      <Recycler  images = {[ coffee,  hands ,  model , img4 ,img5, img6 ]} />
      <Post/>
      </>
    )
  }
}

export default Home;
