import { Image } from '@chakra-ui/react';
import React from 'react';
import MenuIcon from '../assets/vectors/navbar-menu.svg'

export const AppIcon = (props: any) => (
  <Image src={MenuIcon} alt="Navbar menu icon" textColor="white" {...props}/>
);

export default AppIcon;
