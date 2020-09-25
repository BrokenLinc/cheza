import React from 'react';
import { Box } from '@chakra-ui/core';
import { useTimeoutFn } from 'react-use';

import useOnChange from '../utils/useOnChange';
import { useDeviceVM } from '../vms/device';

const FlashOnIdentify = () => {
  const { device } = useDeviceVM();
  const [flasherVisible, setFlasherVisible] = React.useState(false);
  const [, , hideFlasher] = useTimeoutFn(() => {
    setFlasherVisible(false);
  }, 500);

  useOnChange(device?.identifyCount, (current, previous) => {
    if (previous !== undefined) {
      setFlasherVisible(true);
      hideFlasher();
    }
  });

  useOnChange(device?.refreshCount, (current, previous) => {
    if (previous !== undefined) {
      // TODO: if cache needs busting, add a querystring
      window.location.reload();
    }
  });

  if (!flasherVisible) return null;

  return(
    <Box position="absolute" top={0} right={0} bottom={0} left={0} bg="white" />
  );
};

export default FlashOnIdentify;
