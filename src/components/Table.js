import React from 'react';
import { Box } from '@chakra-ui/core';

let Table = (props) => <Box as="table" mt={4} {...props} />;
Table.Row = (props) => <Box as="tr" {...props} />;
Table.Head = (props) => <Box as="thead" {...props} />;
Table.Body = (props) => <Box as="tbody" {...props} />;
Table.HeaderCell = (props) => <Box as="th" p="8px 64px 8px 0" textAlign="left" {...props} />
Table.Cell = (props) => <Box as="td" p="8px 64px 8px 0" {...props} />;

export default Table;
