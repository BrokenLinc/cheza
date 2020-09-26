import { useCookie } from 'react-use';
import { random } from 'lodash';

const useDeviceId = () => {
  const [_deviceId, updateDeviceId] = useCookie('device-id');
  const deviceId = _deviceId || random(10000, 99999);
  if (!_deviceId) updateDeviceId(deviceId);
  return String(deviceId);
};

export default useDeviceId;
