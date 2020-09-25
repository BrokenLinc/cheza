/*
  API

  This builds on the data layer.
  It adds functions with a thin amount of business logic that relies on database methods.
 */

import firebase from 'firebase';

import dataLayer from './dataLayer';

const { increment } = firebase.firestore.FieldValue;

export const incrementIdentifyCount = (deviceId) => {
  return dataLayer.updateDevice(deviceId, { identifyCount: increment(1) });
};

export const incrementRefreshCount = (deviceId) => {
  return dataLayer.updateDevice(deviceId, { refreshCount: increment(1) });
};

export default {
  ...dataLayer,

  incrementIdentifyCount,
  incrementRefreshCount,
};
