import React, { useState } from 'react';

import {
  Container,
  GridItem,
  Grid,
  Stack,
  Heading,
  Button,
  useDisclosure,
  Flex,
  Input,
  Box,
} from '@chakra-ui/react';
import Switcher from './Switcher/Switcher';
import { PlusCircle } from 'react-feather';
import SwitcherButtons from './Switcher/SwitcherButtons';
import { ShoppingCart, Tag } from 'react-feather';

export default function Marketplace() {
  const [searchText, setSearch] = useState('');
  const [currentSection, setSection] = useState('add');
  // console.log(searchText)

  return (
    <Container maxW="100%" p={0} gridTemplateRows="repeat(3,fr)">
      <Grid templateColumns="repeat(3,1fr)">
        <GridItem colSpan={2}>
          <Switcher value={currentSection} search={searchText} />
        </GridItem>
        <GridItem p={16}>
          <Box pos='sticky' top={20}>
            <Input
              borderRadius={'15px'}
              w="64%"
              my={2}
              placeholder="Cari barang"
              focusBorderColor="red_darker"
              bg="white"
              py={6}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SwitcherButtons
              title={'Keranjang'}
              value={'add'}
              stateValue={currentSection}
              handleValue={setSection}
              icon={ShoppingCart}
            />
            <SwitcherButtons
              title={'List Transaksi'}
              value={'list'}
              stateValue={currentSection}
              handleValue={setSection}
              icon={Tag}
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
