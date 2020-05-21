import React from 'react';
import Navbar from './Components/NavBar';
import Logo from './Components/Logo'
import College from './Pages/College';
import Products from './Pages/Products';
import About from './Pages/About';
import Featured from './Components/Featured'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Styles/logo.css';
import Slider from './Components/Slider'

class App extends React.Component {
  render(){
    return(
      <Router>

      <div className = "app-container">

        <Navbar />
        <Logo/>
        <Slider/>
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
