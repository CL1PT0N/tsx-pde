import React from 'react';
import ProfileImage from '../../../assets/images/profile-image.png';
import { Box, Image } from '@chakra-ui/react';
import { LOCAL_STORAGE_USER } from '../../../utils/constants';
import { getLocalStorage } from '../../../utils/helpers/localstorage';

export default function UserPill() {
  const user = getLocalStorage(LOCAL_STORAGE_USER);
  return (
    <Box
      as="button"
      borderRadius="full"
      bgColor="red.100"
      px={4}
      py={2}
      color="red_darker"
      display="flex"
      flexDir="row"
      alignItems="center"
      fontWeight={500}
      transition="200ms"
      _hover={{ bgColor: 'red.200' }}
      onClick={() => console.log('profile')}
    >
      <Image src={ProfileImage} w="30px" h="30px" mr={2} borderRadius="full" />
      {user.name}
    </Box>
  );
}
