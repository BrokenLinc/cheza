import React from 'react';
import firebase from 'firebase/app';

import firebaseConfig from './firebaseConfig';
import { DeviceVMProvider } from './vms/device';
import Activity1 from './components/Activity1';
import ThemeProvider from './ThemeProvider';

firebase.initializeApp(firebaseConfig);

const App = () => (
  <ThemeProvider>
    <DeviceVMProvider>
      <Activity1 />
    </DeviceVMProvider>
  </ThemeProvider>
);

export default App;
