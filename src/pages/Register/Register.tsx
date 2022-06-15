import { Container, Center, GridItem, Icon, Grid, Box } from '@chakra-ui/react';
import React from 'react';

import { Navigate, NavLink } from 'react-router-dom';
import { isLogged } from '../../utils/helpers/isLogged';
import LoginForm from '../Login/fragments/LoginForm';
import LoginVector from '../Login/fragments/LoginVector';
import RegisterForm from './fragments/RegisterForm';

export default function Register() {
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
          w="100%"
          templateColumns={{lg:"repeat(2, 1fr)"}}
          justifyContent="center"
        >
          <GridItem margin={{base:'5',lg:"auto 0"}}>
            <RegisterForm />
            <Box textColor="grey" fontSize={15} m="0 auto" maxW={{sm:"70%",lg:"50%"}}>
              Already have account?{' '}
              <NavLink
                to="/login"
                style={{ color: '#E70000', fontWeight: 600 }}
              >
                Login
              </NavLink>
            </Box>
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
