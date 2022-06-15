import { Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from './fragments/Navbar';
import HeroSection from './sections/HeroSection';
import Background from '../../assets/vectors/bg-landing.svg';
import AboutSection from './sections/AboutSection';
import SpacerDecor from './fragments/SpacerDecor';
import StatSection from './sections/StatSection';
import NewsSection from './sections/NewsSection';
import FooterSection from './sections/FooterSection';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Container
        maxW="100%"
        backgroundImage={Background}
        backgroundRepeat="no-repeat"
        backgroundSize="130%"
      >
        <HeroSection />
        <SpacerDecor />
        <AboutSection />
        <StatSection />
        {/* <NewsSection /> */}
        <FooterSection />
      </Container>
    </>
  );
}
