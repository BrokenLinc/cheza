import React from 'react';
import firebase from 'firebase/app';

import firebaseConfig from './firebaseConfig';
import { DeviceVMProvider } from './vms/device';
import { DevicesVMProvider } from './vms/devices';
import Router from './Router';
import ThemeProvider from './ThemeProvider';
import StatusBar from './components/StatusBar';

firebase.initializeApp(firebaseConfig);

const App = () => (
  <ThemeProvider>
    <DevicesVMProvider>
      <DeviceVMProvider>
        <Router />
        <StatusBar />
      </DeviceVMProvider>
    </DevicesVMProvider>
  </ThemeProvider>
);

export default App;
