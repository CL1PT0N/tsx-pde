import { Flex } from '@chakra-ui/react';
import Delete from './Delete';
import Edit from './Edit';

export default function ActionButtons({ payload, reload }: any) {
  return (
    <>
      <Flex dir="row" gap={3}>
        <Delete payload={payload} reload={reload} />
        <Edit payload={payload} reload={reload} />
      </Flex>
    </>
  );
}
