import { Container, Grid, GridItem, Icon, Center } from '@chakra-ui/react';
import LoginVector from './fragments/LoginVector';
import React from 'react';
import LoginForm from './fragments/LoginForm';
import { isLogged } from '../../utils/helpers/isLogged';
import { Link, Navigate } from 'react-router-dom';

export default function Login() {
  const logged = isLogged();

  if (logged) {
    return <Navigate to={'/main/beranda'} />;
  }

  return (
    <Container maxW="80%" gridTemplateRows="repeat(2, 1fr)" py={14} p={0}>
      <Center>
        <Grid
          gap={{base:"5",lg:'90'}}
          h="100vh"
          w="base: 100%"
          templateColumns={{ lg:"repeat(2, 1fr)"}}
          justifyContent="center"
        >
          <GridItem margin={{base:'5',lg:"auto 0"}}>
            <LoginForm />
          </GridItem>
          <GridItem margin={{base:'5',lg:"auto 0"}}>
            <Center>
              <Icon
                width={{lg: "458"}}
                height={{lg: "451"}}
                viewBox="0 0 458 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <LoginVector />
              </Icon>
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </Container>
  );
}
