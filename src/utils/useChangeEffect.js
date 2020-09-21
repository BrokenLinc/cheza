import React from 'react';

import useOnChange from './useOnChange';
import { useGameVM } from '../vms/game';

const useChangeEffect = (callback) => {
  const { isMyTurn } = useGameVM();
  useOnChange(isMyTurn, (justBecameMyTurn) => {
    justBecameMyTurn && callback();
  });
};

export default useChangeEffect;
