import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type activeUsersItems = {
  username:string,
  role:string
}

export default function ActiveUsersItems({username, role}:activeUsersItems) {
  return (
    <Box my={4} display="flex" flexDir="row" alignItems="center" gap={4}>
      <Image
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        w="50px"
        h='50px'
        borderRadius="full"
      />
      <VStack alignItems="start">
        <Text fontWeight={500} as="h6" noOfLines={1}>
          {username}
        </Text>
        <Text fontWeight={300} as="h6" color="grey">
          {role}
        </Text>
      </VStack>
    </Box>
  );
}
