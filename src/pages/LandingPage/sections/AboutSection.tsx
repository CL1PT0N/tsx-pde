import {
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import AboutSectionImage from '../../../assets/images/AboutSectionImage.png';
import AboutSectionDecor from '../../../assets/images/AboutSectionDecor.png';

import React from 'react';

export default function AboutSection() {
  return (
    <Container maxW={{base:"90%", lg:"80%"}} position="relative"  display='flex' alignItems='center'>
      <Grid templateColumns={{lg:"repeat(5, 1fr)"}} gap={6} alignItems="start">
        <GridItem w="100%" pt={{lg:"20"}} colSpan={3}>
          <Heading>Apa itu Platform SMK TKJ?</Heading>
          <Text fontSize={18} my={4} textAlign={{base:"justify", lg:"left"}} textColor="black" letterSpacing={1}>
            Platform Smk Tkj Adalah Platform yang membantu mewadahi Kegiatan
            serta menghubungkan Sekolah-sekolah SMK yang ada di seluruh
            indonesia dalam satu website/mobile. Platform Smk Tkj juga menjadi
            penghubung antara sekolah dengan Instansi yang menyediakan Bursa
            Kerja, Internship, dan sertifikasi.
          </Text>
        </GridItem>
        <GridItem w="100%" justifySelf="center" colSpan={[3,2]}>
          <Image src={AboutSectionImage} />
        </GridItem>
      </Grid>
          <Image src={AboutSectionDecor} display={{base:"none",lg:"block"}} position="absolute" maxH="140px" right={-130}   top='50%'/>
    </Container>
  );
}
