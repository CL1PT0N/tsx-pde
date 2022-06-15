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
  Text,
} from '@chakra-ui/react';
import { PlusCircle } from 'react-feather';
import RoleOptions from '../../../../components/RoleOptions';
import Actions from './ActionButtons/Actions';
import AddModal from './AddModal';
import { provinceData } from '../../../../utils/provinceId';

const TABLE_ROWS = [
  'Tujuan Magang',
  'Tanggal Magang',
  'Lokasi',
  'Nama Guru',
  'Opsi',
  'Status',
];

const TABLE_SCHEMA = ['apprenticeshipPlace', 'intershipDate', 'place', 'user'];

export default function Tables({
  interns = [],
  reload,
}: {
  interns: [] | any;
  reload: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(interns);
  return (
    <Box w="full" bg="white" borderRadius="3xl" p={8}>
      <AddModal
        isOpen={isOpen}
        onOpen={onOpen}
        reload={reload}
        onClose={onClose}
      />
      <Heading fontSize={30} mb={4}>
        Pengajuan Magang
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
          {interns.length >= 1 ? (
            interns.map((apiItem: any, index: number) => (
              <Tr key={index} bg={index % 2 === 0 ? 'table_even' : 'table_odd'}>
                {TABLE_SCHEMA.map((item, index) => {
                  // console.log(apiItem === 'intershipDate');
                  return (
                    <Td key={index}>
                      {(() => {
                        // console.log(apiItem[item]);
                        switch (item) {
                          case 'intershipDate':
                            return apiItem[item].split('T')[0];
                          case 'place':
                            console.log(provinceData.filter((provItem) => provItem.provinceId == apiItem[item].provinceId)[0])
                            return provinceData.filter((provItem) => provItem.provinceId == apiItem[item].provinceId)[0].province
                          case 'user':
                            return apiItem[item].map((currUser: any) => (
                              <Text my={1}>{currUser.name},</Text>
                            ));
                          default:
                            return apiItem[item];
                        }
                      })()}
                    </Td>
                  );
                })}
                <Td>
                  <RoleOptions submissionId={apiItem.submissionId} reload={reload}>
                    <Actions payload={apiItem} reload={reload} />
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
  );
}
