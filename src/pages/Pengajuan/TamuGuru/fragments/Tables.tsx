import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { PlusCircle } from 'react-feather';
import RoleOptions from '../../../../components/RoleOptions';
import { LOGGED_CONFIG } from '../../../../utils/constants';
import ActionButtons from './ActionButtons';
import ModalAddGuest from './ModalAddGuest';

const TABLE_ROWS = [
  'No.',
  'Tanggal Kunjungan',
  'Keperluan',
  'Jumlah Guru',
  'Jam Masuk',
  'Jam Keluar',
  'Opsi',
  'Status',
];

const TABLE_SCHEMA = ['visitDate', 'necessity', 'teacher', 'in', 'out'];

export default function Tables({
  guests = [],
  reload,
}: {
  guests: [] | any;
  reload: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log(guests);

  return (
    <>
      <ModalAddGuest
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        reload={reload}
      />
      <Box w="full" bg="white" borderRadius="3xl" p={8}>
        <Heading fontSize={30} mb={4}>
          Pengajuan Tamu Guru
        </Heading>
        <Flex dir="row" justifyContent="space-between">
          <Button
            gap={3}
            p={6}
            borderRadius="20px"
            bg="red_lighter"
            color="white"
            fontWeight={500}
            colorScheme="red"
            _hover={{ bg: 'red_darker' }}
            onClick={onOpen}
          >
            <PlusCircle />
            Tambah Pengajuan
          </Button>
        </Flex>
        <Table mt={6} bg="grey_bg">
          <Thead bg="table_head">
            <Tr>
              {TABLE_ROWS.map((title, index) => (
                <Th
                  textColor="white"
                  textTransform="capitalize"
                  fontWeight={500}
                  fontSize={15}
                  py={8}
                  key={index}
                >
                  {title}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {guests.length >= 1 ? (
              guests.map((apiItem: any, index: number) => (
                <Tr
                  key={index}
                  bg={index % 2 === 0 ? 'table_even' : 'table_odd'}
                >
                  <Td>{index + 1}</Td>
                  {TABLE_SCHEMA.map((item, index) => (
                    <Td key={index}>
                      {item === 'visitDate'
                        ? apiItem[item].split('T')[0]
                        : apiItem[item]}
                    </Td>
                  ))}
                  <Td>
                    <RoleOptions
                      submissionId={apiItem.submissionId}
                      reload={reload}
                    >
                      <ActionButtons payload={apiItem} reload={reload} />
                    </RoleOptions>
                  </Td>
                  <Td>
                    <Badge
                      w="full"
                      textAlign="center"
                      bg={apiItem.approve ? 'teal_custom' : 'red_lighter'}
                      color="white"
                      textTransform="capitalize"
                      p={4}
                      borderRadius="20px"
                      fontWeight={500}
                      fontSize={15}
                    >
                      {apiItem.approve ? 'Approved' : 'Declined'}
                    </Badge>
                  </Td>
                </Tr>
              ))
            ) : (
              <h1>No data</h1>
            )}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}
