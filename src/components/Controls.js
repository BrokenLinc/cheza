import React from 'react';
import { Box, Button, Heading, Select } from '@chakra-ui/core';
import { isEmpty, map } from 'lodash';

import api from '../api';
import { ACTIVITIES } from '../constants/activity';
import { useDevicesVM } from '../vms/devices';
import Table from './Table';

const Controls = () => {
  const { devices, loaded } = useDevicesVM();

  const handleActivitySelectChange = (deviceId, e) => {
    api.updateDevice(deviceId, { activityKey: e.target.value });
  };

  if (!loaded) return null;

  return (
    <Box p={8} flexGrow="1" bg="white">
      <Heading size="lg">Devices</Heading>
      {isEmpty(devices) && (
        <p>None registered</p>
      )}
      <Table mt={4}>
        <Table.Head>
          <Table.Row borderBottom="2px solid black">
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Activity</Table.HeaderCell>
            <Table.HeaderCell/>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {map(devices, (device) => (
            <Table.Row key={device.id}>
              <Table.Cell>{device.id}</Table.Cell>
              <Table.Cell>
                <Select
                  placeholder="Select activity"
                  value={device.activityKey}
                  onChange={(e) => handleActivitySelectChange(device.id, e)}
                >
                  {map(ACTIVITIES, (activity) => (
                    <option key={activity.key} value={activity.key}>{activity.name}</option>
                  ))}
                </Select>
              </Table.Cell>
              <Table.Cell pr={0}>
                <Button onClick={() => api.incrementIdentifyCount(device.id)} mr={2}>Flash</Button>
                <Button onClick={() => api.incrementRefreshCount(device.id)} mr={2}>Refresh</Button>
                <Button variantColor="red" variant="outline" onClick={() => api.deleteDevice(device.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Box>
  );
};

export default Controls;
