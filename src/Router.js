import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Activity1 from './components/Activity1';
import Controls from './components/Controls';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Controls} path="/controls" exact />
      <Route component={Activity1} path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
