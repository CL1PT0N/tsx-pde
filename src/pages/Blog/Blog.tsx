import {
  Container,
  GridItem,
  Grid,
  HStack,
  Heading,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import SideSection from './fragments/SideSection';
import UploadModal from './fragments/UploadModal';
import Switcher from './Switcher/Switcher';
import SwitcherButton from './Switcher/SwitcherButton';
import { PlusCircle } from 'react-feather';

export default function Blog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentSection, setSection] = useState('');

  return (
    <Container maxW="100%" p={0} gridTemplateRows="repeat(3, 1fr)">
      <UploadModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={2}>
          <HStack mx={2}>
            <SwitcherButton
              title={'Blog/Postingan'}
              value={''}
              statevalue={currentSection}
              handleValue={setSection}
            />
            <SwitcherButton
              title={'Berita'}
              value={'news'}
              statevalue={currentSection}
              handleValue={setSection}
            />
          </HStack>
          <HStack my={10} mx={2} justifyContent="space-between">
            <Heading fontSize={30}>Postingan terbaru</Heading>
            <Button
              onClick={onOpen}
              leftIcon={<PlusCircle />}
              borderRadius="20px"
              color="white"
              colorScheme="teal"
              bg="teal_custom"
              fontWeight={500}
              _hover={{ bg: 'teal_customdarker' }}
              py={6}
            >
              Tambah Postingan
            </Button>
          </HStack>
          <Container maxW="100%" p={0} gridTemplateRows="repeat(2, 1fr)">
            <Switcher value={currentSection} />
          </Container>
        </GridItem>
        <GridItem>
          <SideSection></SideSection>
        </GridItem>
      </Grid>
    </Container>
  );
}
