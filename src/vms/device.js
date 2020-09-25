/*
  Device viewmodel

  This is a context provider/consumer pattern.
  The provider takes a deviceId, and provides a viewmodel the device's properties and methods.
  The viewmodel context can be consumed with a single hook.
 */

import React from 'react';
import { useCookie } from 'react-use';
import { random } from 'lodash';

import api from '../api';

const useDeviceId = () => {
  const [_deviceId, updateDeviceId] = useCookie('device-id');
  const deviceId = _deviceId || random(10000, 99999);
  if (!_deviceId) updateDeviceId(deviceId);
  return deviceId;
};

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
    device: device.data,
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
