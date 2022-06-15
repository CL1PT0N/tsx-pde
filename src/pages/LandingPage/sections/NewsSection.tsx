import React from 'react';
import { Container, Heading, Box } from '@chakra-ui/react';
import NewsCard from '../fragments/NewsCard';
import News from '../../../testing/berita.json';
import { getDate } from '../../../utils/helpers/unixToString';
import Carousel from 'react-multi-carousel';
import styled from '@emotion/styled';

const CardStyle = styled.div`
  li {
    margin: 0 5px;
  }
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function NewsSection() {
  return (
    <Container maxW="80%" my={40}>
      <Heading my={4}>Berita terkini</Heading>
      <CardStyle>
        <Carousel responsive={responsive}>
          {News.map((item, index) => (
            <NewsCard
              title={item.title}
              date={getDate(item.date)}
              imageUrl={item.imageUrl}
              key={index}
            />
          ))}
        </Carousel>
      </CardStyle>
    </Container>
  );
}
