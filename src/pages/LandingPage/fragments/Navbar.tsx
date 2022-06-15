import { Box, Container, Image } from '@chakra-ui/react';
import AppIcon from '../../../components/AppIcon';
import MenuIcon from '../../../components/MenuIcon';
import { NavLink } from 'react-router-dom';
import NavButtons from './NavButtons';
import React, {useState} from 'react';
import useScrollPosition from '../../../utils/hooks/useScrollPosition';

export default function Navbar() {
  const currentPos = useScrollPosition();
  const [show, setShow] = useState(false);

  return (
    <Box
      backgroundColor={currentPos > 200 ? "red_darker" : undefined}
      textColor="white"
      position="fixed"
      as="nav"
      w="100%"
      zIndex={999}
      css={{ backdropFilter: "blur(5px)" }}
    >
      <Container
        display="flex"
        py={12}
        maxW="80%"
        alignItems="center"
        justifyContent="space-between"
        transition='500ms'
        h={currentPos > 200 ? '50px' : '100px'}
      >
        <NavLink to="/">
          <Box
            flexDirection="row"
            display="flex"
            alignItems="center"
            fontSize={[15, 20]}
            fontWeight={600}
            letterSpacing={1}
          >
            <AppIcon m={3} height="8" />
            Platform SMK TKJ
          </Box>
        </NavLink>
        <MenuIcon m={3} height="8" display={{base:"block", lg:"none"}} />
        <Box display={{base:"none",lg:"flex"}} flexDirection="row">
          <NavButtons name="Beranda" active={false} type='page' path={'hero-section'}/>
          <NavButtons name="Tentang" active={false} type='page' path={'about-section'}/>
          {/* <NavButtons name="Berita" active={false} type='page' path={'news-section'}/> */}
          <NavButtons name="Kontak" active={false} type='page' path={'footer-section'}/>
          <NavButtons name="Login" active={true} type='nav' path={'/login'}/>
        </Box>
      </Container>
    </Box>
  );
}
