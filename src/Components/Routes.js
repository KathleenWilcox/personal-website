import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../Pages/About';
import Products from '../Pages/Products';
import College from '../Pages/College';
import Home from '../Pages/Home';


const Routes = () => (

          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/College" component={College} />
            <Route path="/Products" component={Products} />
            <Route path="/About" component={About} />
            </Switch>
);

export default Routes;
