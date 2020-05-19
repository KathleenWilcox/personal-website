import React from 'react';
import { Route, Switch } from 'react-router-dom';
import College from '../Pages/College';
import Products from '../Pages/Products';
import About from '../Pages/About';



const Routes = () => (
  <Switch>
    <Route exact path="/" component={College} />
    <Route path="/Products" component={Products} />
    <Route path="/About" component={About} />
  </Switch>
);

export default Routes;
