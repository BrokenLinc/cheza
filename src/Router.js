import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DeviceActivity from './components/DeviceActivity';
import Controls from './components/Controls';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Controls} path="/controls" exact />
      <Route component={DeviceActivity} path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
