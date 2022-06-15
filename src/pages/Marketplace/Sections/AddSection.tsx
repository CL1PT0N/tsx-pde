import {
  Button,
  Container,
  Flex,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { PlusCircle } from 'react-feather';
import AddModal from '../fragments/AddModal';
import EDCard from '../fragments/EDCard';

export default function AddSection({
  data,
  reload,
}: {
  data: Array<[]>;
  reload: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(data)
  return (
    <>
      <Flex dir="row" mb={6} justifyContent="space-between" maxW="full">
        <Heading>List barang</Heading>
        <AddModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          reload={reload}
        />
        <Button
          gap={3}
          p={6}
          borderRadius="20px"
          bg="red_darker"
          color="white"
          fontWeight={500}
          colorScheme="red"
          onClick={onOpen}
        >
          <PlusCircle />
          Tambah Barang
        </Button>
      </Flex>
      {data.length >= 1 ? (
        data.map((item) => <EDCard {...item} reload={reload} />)
      ) : (
        <h1>No data</h1>
      )}
    </>
  );
}
