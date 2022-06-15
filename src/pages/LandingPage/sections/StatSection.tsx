import React from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import StatItem from '../fragments/StatItem';
import WorkBag from '../../../assets/vectors/landing-stat-bag.svg';
import Hat from '../../../assets/vectors/landing-stat-hat.svg';
import Building from '../../../assets/vectors/landing-stat-building.svg';
import Chart from '../../../assets/vectors/landing-stat-chart.svg';
import { formatAmmount } from '../../../utils/helpers/formatAmmount';


export default function StatSection() {
  return (
    <Container maxW="50%" gridTemplateRows="repeat(4, 1fr)" gap={6} py={14} id='news-section'>
      <Grid templateColumns={{lg:"repeat(4, 1fr)"}} gap={{base:"12",lg:"6"}} alignItems="start">
        <StatItem
          icon={WorkBag}
          color="#61B3FF"
          value="200"
          name="Kunjungan Industri"
        />
        <StatItem
          icon={Hat}
          color="#455A64"
          value={formatAmmount(32312, 0)}
          name="Bursa Kerja"
        />
        <StatItem
          icon={Building}
          color="#7B61FF"
          value={formatAmmount(67813, 0)}
          name="Guru Siswa/Magang"
        />

        <StatItem
          icon={Chart}
          color="#FE9B43"
          value="1k+"
          name="Kunjungan Industri"
        />
      </Grid>
    </Container>
  );
}
