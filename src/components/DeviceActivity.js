import React from 'react';
import { Flex, Heading } from '@chakra-ui/core';

import { useDeviceVM } from '../vms/device';

const DeviceActivity = () => {
  const { device, loaded } = useDeviceVM();

  if (!loaded) return null;

  if (!device.activity) return (
    <Flex flexGrow={1} alignItems="center" justifyContent="center">
      <Heading>No activity</Heading>
    </Flex>
  );

  const Activity = device.activity.component;

  return <Activity {...device.activity.props} key={JSON.stringify(device.activity.props)} />;
};

export default DeviceActivity;
