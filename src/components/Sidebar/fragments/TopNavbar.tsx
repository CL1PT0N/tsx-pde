import { Box, IconButton, useDisclosure } from '@chakra-ui/react';
import { IoMdPower } from 'react-icons/io';

import React from 'react';
import UserPill from './UserPill';
import ModalLogout from './ModalLogout';

export default function TopNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w="calc(100vw-300px)"
        h="100px"
        width="100%"
        bg="grey_bg"
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="end"
        px={14}
        pos='sticky'
        top={0}
        zIndex={1}
      >
        {/* <Box>Search</Box> */}
        <Box display="flex" flexDir="row" alignItems="center" gap={7}>
          <UserPill />
          <IconButton
            icon={<IoMdPower size="30px" />}
            aria-label={'logout'}
            bg="grey_bg"
            borderRadius="full"
            onClick={onOpen}
          />
        </Box>
      </Box>
      <ModalLogout isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
