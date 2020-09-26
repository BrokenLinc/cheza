/*
  Device viewmodel

  This is a context provider/consumer pattern.
  The provider takes a deviceId, and provides a viewmodel the device's properties and methods.
  The viewmodel context can be consumed with a single hook.
 */

import React from 'react';

import api from '../api';
import sanitizeDeviceData from '../utils/sanitizeDeviceData';
import useDeviceId from '../utils/useDeviceId';

const useCreateDeviceVM = () => {
  const deviceId = useDeviceId();
  const device = api.useDeviceData(deviceId);

  React.useEffect(() => {
    // ensure existence of device
    api.updateDevice(deviceId, {});
  }, [deviceId]);

  // aliases
  const loaded = device.loaded;
  const error = device.error;

  // calculated values

  // functions

  const vm = {
    loaded,
    error,
    deviceId,
    device: sanitizeDeviceData(device.data),
  };

  return vm;
};

// Provider/consumer pattern, to make VM available to all descendants
const DeviceContext = React.createContext({});
export const useDeviceVM = () => React.useContext(DeviceContext);
export const DeviceVMProvider = (props) => {
  const { deviceId, ...restProps } = props;
  const vm = useCreateDeviceVM({ deviceId });
  return (
    <DeviceContext.Provider {...restProps} value={vm} />
  );
};
