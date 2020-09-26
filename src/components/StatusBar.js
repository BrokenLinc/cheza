import React from 'react';
import { Box } from '@chakra-ui/core';
import { useDeviceVM } from '../vms/device';

const StatusBar = () => {
  const { device, loaded } = useDeviceVM();

  if (!loaded) return null;

  return (
    <Box position="absolute" right={0} bottom={0} color="gray.500" p={2} fontSize={10}>
      Device {device.id}, v1.0.0
    </Box>
  );
};

export default StatusBar;
