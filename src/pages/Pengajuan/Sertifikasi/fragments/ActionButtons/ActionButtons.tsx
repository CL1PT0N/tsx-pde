import React from 'react';
import { Flex } from '@chakra-ui/react';
import Edit from './Edit';
import Delete from './Delete';

export default function ActionButtons({ payload, reload }: any) {
  return (
    <Flex gap={3}>
      <Delete payload={payload} reload={reload}/>
      <Edit payload={payload} reload={reload}/>
    </Flex>
  );
}
