import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

const Routes = () => (
  <Switch>
    <Route component={ Login } path="/" exact />
    <Route component={ Wallet } path="/carteira" exact />
  </Switch>
);

export default Routes;
