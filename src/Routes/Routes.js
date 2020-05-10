import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Contact from '../Pages/Contact';



const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Products" component={Products} />
    <Route path="/Contact" component={Contact} />
  </Switch>
);

export default Routes;
