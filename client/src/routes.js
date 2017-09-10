import React from 'react';  
import { Route } from 'react-router';

import App from './App';  
import NotFoundPage from './Components/pages/Not-found-page';

import HomePage from './Components/pages/Home-page';  
import Register from './Components/auth/Register';  
import Login from './Components/auth/Login';  
import Dashboard from './Components/Dashboard';  
import RequireAuth from './Components/auth/Require-auth';

export default (  
  <Route path="/" component={App}>
    <Route path="/" component={HomePage} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="dashboard" component={RequireAuth(Dashboard)} />  
    <Route path="*" component={NotFoundPage} />
  </Route>
);