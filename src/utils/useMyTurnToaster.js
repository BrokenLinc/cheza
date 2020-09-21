import React from 'react';
import { useToast } from '@chakra-ui/core';

import useChangeEffect from './useChangeEffect';

const useMyTurnToaster = () => {
  const toast = useToast();

  const onMyTurn = React.useCallback(() => {
    toast({
      title: 'It is your turn!',
      status: 'success',
      position: 'bottom',
    });
  },[toast]);

  useChangeEffect(onMyTurn);
};

export default useMyTurnToaster;
