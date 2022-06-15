import { Flex } from '@chakra-ui/react';
import React from 'react';
import Approve from './Approve';
import Decline from './Decline';

export default function Buttons({ submissionId, reload }: any) {
  return (
    <Flex dir="row" gap={3}>
      <Approve submissionId={submissionId} reload={reload}/>
      <Decline submissionId={submissionId} reload={reload}/>
    </Flex>
  );
}
