import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import DeclineModal from './DeclineModal';

export default function Decline({ submissionId, reload }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <DeclineModal
        isOpen={isOpen}
        onClose={onClose}
        payload={submissionId}
        reload={reload}
      />
      <Button
        bg="red_darker"
        onClick={onOpen}
        colorScheme="red"
        borderRadius="full"
        fontWeight={500}
      >
        Decline
      </Button>
    </>
  );
}
