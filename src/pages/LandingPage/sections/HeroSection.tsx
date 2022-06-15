import React from 'react';
import HeroSectionImage from '../../../assets/images/HeroSectionImage.png';
import Background from '../../../assets/vectors/bg-landing.svg';
import {
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Container,
} from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <Container maxW={{base:"90%",lg:"80%"}} maxH="100%" pt={200} id='hero-section'>
      <Grid
        templateColumns={{lg:"repeat(2, 1fr)"}}
        gap={6}
        alignItems="start"
        textColor="white"
      >
        <GridItem w={{lg:"70%"}} pt={20} textColor={{base:"black", lg:"white"}}>
          <Heading>Selamat Datang Di Platform SMK TKJ</Heading>
          <Text fontSize={18} my={4}>
            Selamat datang di website platform SMK TKJ, dapatkan fitur-fitur
            menarik untuk kebutuhan pendidikan maupun bisnis anda di bidang
            tekhnologi bersama Telkom Group.
          </Text>
        </GridItem>
        <GridItem w="100%" justifySelf="center">
          <Image src={HeroSectionImage} />
        </GridItem>
      </Grid>
    </Container>
  );
}
