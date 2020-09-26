import ACTIVITY, { DEFAULT_ACTIVITY } from '../constants/activity';

const sanitizeDeviceData = (device) => {
  if (!device) return device;
  console.log(device);
  const activityKey = device.activityKey || DEFAULT_ACTIVITY.key;
  const activity = ACTIVITY[activityKey];

  return {
    ...device,
    activityKey,
    activity,
  };
};

export default sanitizeDeviceData;
