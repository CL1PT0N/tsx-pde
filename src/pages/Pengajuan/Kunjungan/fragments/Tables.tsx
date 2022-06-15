import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Heading,
  Flex,
  Button,
  Tr,
  Th,
  Td,
  Badge,
  useDisclosure,
} from '@chakra-ui/react';
import { PlusCircle } from 'react-feather';
import AddModal from './AddModal';
import ActionButtons from './ActionButtons/ActionButtons';
import RoleOptions from '../../../../components/RoleOptions';

const TABLE_ROWS = [
  'Nama Instansi',
  'Tanggal kunjungan',
  'Jam Masuk',
  'Jam Keluar',
  'Jumlah Guru',
  'Jumlah Siswa',
  'Opsi',
  'Status',
];

const TABLE_SCHEMA = [
  'agencyName',
  'visitDate',
  'in',
  'out',
  'numberOfTeachers',
  'numberOfStudents',
];

export default function Tables({
  inds = [],
  reload,
}: {
  inds: [] | any;
  reload: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AddModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        reload={reload}
      />
      <Box w="full" bg="white" borderRadius="3xl" p={8}>
        {/* <Button onClick={() => reload()}>Reload</Button> */}
        <Heading fontSize={30} mb={4}>
          Pengajuan Kunjungan Industri
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
        {/* TABLE */}
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
            {inds.length >= 1 ? (
              inds.map((apiItem: any, index: number) => (
                <Tr
                  key={index}
                  bg={index % 2 === 0 ? 'table_even' : 'table_odd'}
                >
                  {TABLE_SCHEMA.map((item, index) => (
                    <Td key={index}>
                      {item === 'visitDate'
                        ? apiItem[item].split('T')[0]
                        : apiItem[item]}
                    </Td>
                  ))}
                  <Td>
                    {/* AAAA */}

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
