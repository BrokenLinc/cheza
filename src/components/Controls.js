import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/core';
import { isEmpty, map } from 'lodash';

import { useDevicesVM } from '../vms/devices';
import Table from './Table';

const Controls = () => {
  const { devices, loaded } = useDevicesVM();;

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
            <Table.Row>
              <Table.Cell>{device.id}</Table.Cell>
              <Table.Cell>{device.activity || 'unknown'}</Table.Cell>
              <Table.Cell pr={0}>
                <Button mr={2}>Identify</Button>
                <Button>Refresh</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Box>
  );
};

export default Controls;
