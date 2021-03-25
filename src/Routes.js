import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Products from './Products';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route exact path="/signup" component={Signup} ></Route> 
        <Route exact path="/products" component={Products} ></Route>  
    </Switch>
);

export default Routes;