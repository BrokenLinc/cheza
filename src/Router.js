import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Activity1 from './components/Activity1';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Activity1} path="/controls" exact />
      <Route component={Activity1} path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
