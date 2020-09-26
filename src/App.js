import React from 'react';
import firebase from 'firebase/app';

import firebaseConfig from './firebaseConfig';
import { DevicesVMProvider } from './vms/devices';
import Router from './Router';
import ThemeProvider from './ThemeProvider';

firebase.initializeApp(firebaseConfig);

const App = () => (
  <ThemeProvider>
    <DevicesVMProvider>
      <Router />
    </DevicesVMProvider>
  </ThemeProvider>
);

export default App;
