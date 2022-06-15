import { Box, Image, VStack, Text, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import ApproveButton from './ApproveDetail/ApproveButton';
import DetailButton from './ApproveDetail/DetailButton';

export default function TransCard({ name, price, imageUrl, productId }: any) {
  return (
    <Box
      my={4}
      w="100%"
      bg="white"
      px={10}
      py={5}
      borderRadius="20px"
      display="flex"
      flexDir="row"
      gap={10}
      alignItems="center"
    >
      {imageUrl ? (
        <Image
          borderRadius="5px"
          w={32}
          maxH={'200px'}
          objectFit="cover"
          src={imageUrl}
        />
      ) : (
        <Box
          display="flex"
          borderRadius="3xl"
          w={32}
          h={32}
          textAlign="center"
          alignItems="center"
          justifyContent="center"
        >
          No Image
        </Box>
      )}
      <VStack alignItems="start">
        <Text as="h6" fontSize={25} fontWeight="bold">
          {name}
        </Text>
        <Text as="p" fontWeight={300} color="red">
          {productId}
        </Text>
        <Text as="h6" fontSize={16} fontWeight="medium">
          Rp {price.toLocaleString()}
        </Text>
        <HStack>
          <DetailButton />
          <ApproveButton />
        </HStack>
      </VStack>
    </Box>
  );
}
