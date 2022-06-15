import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

type NewsCardType = {
  title: string;
  date: string;
  imageUrl: string;
};

export default function NewsCard({ title, date, imageUrl }: NewsCardType) {
  return (
    <Box
      // w='25vw'
      borderRadius="3xl"
      h={60}
      backgroundImage={`url(${imageUrl})`}
      backgroundRepeat='no-repeat'
      backgroundSize="cover"
      // bgGradient={'linear-gradient(rgba(255,0,0,0), blackAlpha.800)'}
    >
      <HStack
        borderRadius="3xl"
        // width="400px"
        height={60}
        bottom={0}
        px={7}
        pb={2}
        bgGradient={'linear-gradient(rgba(255,0,0,0), blackAlpha.900)'}
        justifyContent="space-between"
        alignItems='end'
        paddingBottom={10}
      >
        <Box textColor="white">
          <Text noOfLines={2}>{title}</Text>
          {date}
        </Box>
        <NavLink to={'#'}>
          <Box
            background="red_lighter"
            textColor="white"
            px={5}
            py={2}
            borderRadius="3xl"
            fontWeight={600}
            _hover={{ background: 'red_darker' }}
          >
            Selengkapnya
          </Box>
        </NavLink>
      </HStack>
    </Box>
  );
}
