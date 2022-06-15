import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ApproveModal from './ApproveModal';

export default function Approve({ submissionId, reload }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ApproveModal isOpen={isOpen} onClose={onClose} payload={submissionId} reload={reload} />
      <Button
        onClick={onOpen}
        bg="teal_custom"
        _hover={{ bg:'teal_customdarker' }}
        colorScheme="teal"
        borderRadius="full"
        fontWeight={500}
      >
        Approve
      </Button>
    </>
  );
}
