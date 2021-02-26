import React from 'react';

import Navbar from './Components/NavBar';
import Routes from './Components/Routes';
import Logo from './Components/Logo'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component {
  render(){
    return(
      <>
        <Navbar />
        <Logo />
          < Routes />

        </>
      );
    }
}

export default App;
