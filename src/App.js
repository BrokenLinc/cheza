import React from 'react';
import firebase from 'firebase/app';
import { Box } from '@chakra-ui/core';

import firebaseConfig from './firebaseConfig';
import { DeviceVMProvider } from './vms/device';
import { DevicesVMProvider } from './vms/devices';
import Router from './Router';
import ThemeProvider from './ThemeProvider';

firebase.initializeApp(firebaseConfig);

const App = () => (
  <ThemeProvider>
    <DevicesVMProvider>
      <DeviceVMProvider>
        <Router />
        <Box position="absolute" right={0} bottom={0} color="gray.500" p={2} fontSize={10}>
          v0.0.2
        </Box>
      </DeviceVMProvider>
    </DevicesVMProvider>
  </ThemeProvider>
);

export default App;
