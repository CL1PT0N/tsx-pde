import { HStack, VStack, Image, Text, Spinner } from '@chakra-ui/react';
import React from 'react';
import { yangLalu } from '../../../utils/helpers/unixToString';

export default function BlogUser({name, icon, date}:{name:string, icon:string, date:number}) {
  return (
    <HStack alignItems="center" p={4}>
      <Image
        w={12}
        h={12}
        objectFit="cover"
        borderRadius="full"
        src={icon}
      />
      <VStack align="start" gap={-2}>
        <Text fontWeight={500}>{name}</Text>
        <Text style={{ marginTop: 0 }} color="grey" fontWeight={300}>
          {yangLalu(date)}
        </Text>
      </VStack>
    </HStack>
  );
}
