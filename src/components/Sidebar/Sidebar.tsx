import { Box, Container, HStack, VStack, Image } from '@chakra-ui/react';
import NavItem from './fragments/NavItem';
import TopNavbar from './fragments/TopNavbar';

import LogoColor from '../../assets/vectors/logo-color.svg';

import { Home, ShoppingBag, BookOpen, Users, Clipboard } from 'react-feather';
import PengajuanAccordion from './fragments/PengajuanAccordion';

type SidebarType = {
  children: any;
};

export default function Sidebar({ children }: SidebarType) {
  return (
    <>
      <HStack alignItems="flex-start">
        <Box
          overflowY='scroll'
          fontWeight={500}
          pos="sticky"
          top={0}
          h="100vh"
          maxH="100vh"
          w="350px"
          as="nav"
          bg="white"
          p={8}
          left={0}
          borderTopRightRadius="3xl"
          borderBottomRightRadius="3xl"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#E70000',
            },
          }}
        >
          <Box
            display="flex"
            flexDir="row"
            justifyContent="space-around"
            my={5}
            fontWeight={600}
          >
            <Image src={LogoColor} />
            Platform SMK TKJ
          </Box>
          <NavItem title={'Beranda'} icon={Home} path={'/main/beranda'} />
          <NavItem title={'Blog'} icon={BookOpen} path={'/main/blog'} />
          <PengajuanAccordion />
          <NavItem
            title={'Marketplace'}
            icon={ShoppingBag}
            path={'/main/marketplace'}
          />
          <NavItem title={'Forum Diskusi'} icon={Users} path={'/main/forum'} />
          <NavItem title={'Lms'} icon={Clipboard} path={'/main/lms'} />
        </Box>
        <VStack w="100%" alignItems="flex-start" style={{ marginLeft: 0 }}>
          <TopNavbar />
          <Container
            pos="relative"
            p={14}
            bg="grey_bg"
            minH="calc(100vh - 100px)"
            minW="100%"
            style={{ marginTop: 0 }}
          >
            {children}
          </Container>
        </VStack>
      </HStack>
    </>
  );
}
