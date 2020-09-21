import React from 'react';
import { usePrevious } from 'react-use';

const useOnChange = (value, onChange) => {
  const previousValue = usePrevious(value);

  React.useEffect(() => {
    if (value !== previousValue) {
      onChange(value, previousValue);
    }
  }, [value, previousValue, onChange]);
};

export default useOnChange;
