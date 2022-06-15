import React from 'react';
import FooterImage from '../../../assets/vectors/landing-footer-image.svg';
import { Container, Text, Stack, Image } from '@chakra-ui/react';
import FooterCol from '../fragments/FooterCol';
import { kontak, menuUtama, sosialMedia } from '../fragments/FooterLinks';



export default function FooterSection() {
  return (
      <Container maxW="80%" id='footer-section'>
        <Stack direction={{base:"column", lg:"row"}} justifyContent="space-around">
          <Image src={FooterImage} maxW={{base:"100%",md:"60%",lg:"100%"}} mx="auto"></Image>
          <Stack direction={{base:"column", md:"row"}} spacing={14}>
            <FooterCol heading="Menu Utama" list={menuUtama} />
            <FooterCol heading="Hubungi Kami" list={kontak} />
            <FooterCol heading="Sosial Media" list={sosialMedia} />
          </Stack>
        </Stack>
        <Text textAlign="center" my={20}>
          2022 © Copyright
        </Text>
      </Container>
  );
}
