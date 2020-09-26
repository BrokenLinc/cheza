import React from 'react';
import { Flex, Heading } from '@chakra-ui/core';

import { DeviceVMProvider, useDeviceVM } from '../vms/device';
import FlashOnIdentify from './FlashOnIdentify';
import StatusBar from './StatusBar';

const ActivityDisplay = () => {
  const { device, loaded } = useDeviceVM();

  if (!loaded) return null;

  if (!device.activity) return (
    <Flex flexGrow={1} alignItems="center" justifyContent="center">
      <Heading>No activity</Heading>
      <FlashOnIdentify />
    </Flex>
  );

  const Activity = device.activity.component;

  return (
    <React.Fragment>
      <Activity {...device.activity.props} key={JSON.stringify(device.activity.props)} />
      <FlashOnIdentify />
    </React.Fragment>
  );
};

const DeviceActivity = () => (
  <DeviceVMProvider>
    <ActivityDisplay />
    <FlashOnIdentify />
    <StatusBar />
  </DeviceVMProvider>
);

export default DeviceActivity;
