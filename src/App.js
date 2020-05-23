import React from 'react';
import Navbar from './Components/NavBar';
import Logo from './Components/Logo'
import College from './Pages/College';
import Products from './Pages/Products';
import About from './Pages/About';
import Featured from './Components/Featured'
import Image from './Components/Image';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Styles/logo.css';
import Recycler from './Components/Recycler'
import img1 from './Images/img1.png'
import img2 from './Images/img2.png'
import img3 from './Images/img3.png'
import img4 from './Images/img4.png'
import img5 from './Images/img5.png'
import img6 from './Images/img6.jpg'

class App extends React.Component {
  render(){
    return(
      <Router>

      <div className = "app-container">

        <Navbar />
        <Logo/>

        <Recycler  images = {[ img1,  img2 ,  img3 , img4 ,img5, img6 ]} />


        <Switch>
          <Route exact path="/" component={College} />
          <Route path="/Products" component={Products} />
          <Route path="/About" component={About} />
          </Switch>
      </div>
      </Router>
  );
  }
}

export default App;
