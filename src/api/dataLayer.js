/*
  Data layer

  This module does most of the interfacing with Firebase.
  It build shorthand references for each collection and document.
  It exposes reactive hooks for the collections and documents.
  It exposes CRUD (AGUD?) methods for the collections.
  It handles a small amount of normalization.
 */

import firebase from 'firebase';

import useCollectionData from '../lib/useCollectionData';
import useDocumentData from '../lib/useDocumentData';

// Firebase shorthand references
const db = {};
db.devices = () => firebase.firestore().collection('devices');
db.device = (deviceId) => db.devices().doc(deviceId);

// Data hooks
export const useDeviceData = (deviceId) => useDocumentData(db.device(deviceId));
export const useDevicesData = () => useCollectionData(db.devices());

// Devices
export const addDevice = (values) => {
  return db.devices().add({
    name: 'Untitled Device',
    ...values,
  });
};
export const getDevice = (deviceId) => {
  return db.device(deviceId).get();
};
export const getDevices = () => {
  return db.devices().get();
};
export const updateDevice = (deviceId, values) => {
  return db.device(deviceId).set(values, { merge: true });
};
export const deleteDevice = (deviceId) => {
  return db.device(deviceId).delete();
};

export default {
  useDeviceData,
  useDevicesData,

  addDevice,
  getDevice,
  getDevices,
  updateDevice,
  deleteDevice,
};
