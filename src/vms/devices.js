import React from 'react';

import api from '../api';

const useCreateDevicesVM = () => {
  const devices = api.useDevicesData();

  // aliases

  // calculated values

  // functions

  const vm = {
    loaded: devices.loaded,
    error: devices.error,
    devices: devices.data,
  };

  // console.log(vm);

  return vm;
};

// Provider/consumer pattern, to make VM available to all descendants
const DevicesContext = React.createContext({});
export const useDevicesVM = () => React.useContext(DevicesContext);
export const DevicesVMProvider = (props) => {
  const vm = useCreateDevicesVM();
  return (
    <DevicesContext.Provider {...props} value={vm} />
  );
};
