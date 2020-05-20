import React from 'react';
import Navbar from './Components/NavBar';
import Social from './Components/Social';
import Logo from './Components/Logo'
import College from './Pages/College';
import Products from './Pages/Products';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render(){
    return(
    <>
      <Navbar />
      <Logo/>
      <Router>
      <Switch>
        <Route exact path="/" component={College} />
        <Route path="/Products" component={Products} />
        <Route path="/About" component={About} />
      </Switch>
      </Router>
    </>
  );
  }
}

export default App;
