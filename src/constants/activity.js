import { Flex, Heading } from '@chakra-ui/core';
import { each, first, identity, map } from 'lodash';
import React from 'react';

import Activity1 from '../components/Activity1';

export const ACTIVITY = {
  NO_ACTIVITY: {
    name: 'No activity',
    component: () => (
      <Flex flexGrow={1} alignItems="center" justifyContent="center">
        <Heading>No activity</Heading>
      </Flex>
    ),
  },
  COUNT_TO_ONE: {
    name: 'Count to 1',
    component: Activity1,
    props: {
      count: 1,
    },
  },
  COUNT_TO_TWO: {
    name: 'Count to 2',
    component: Activity1,
    props: {
      count: 2,
    },
  },
  COUNT_TO_FOUR: {
    name: 'Count to 4',
    component: Activity1,
    props: {
      count: 4,
    },
  },
  COUNT_TO_NINE: {
    name: 'Count to 9',
    component: Activity1,
    props: {
      count: 9,
    },
  },
};

// Assign keys
each(ACTIVITY, (o, key) => o.key = key);

export const ACTIVITIES = map(ACTIVITY, identity);

export const DEFAULT_ACTIVITY = first(ACTIVITIES);

export default ACTIVITY;
