import { Box, Text } from '@chakra-ui/react';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

type ThisPropsType = {
  active: boolean;
  name: string;
  type: string;
  path: string;
};

export const NavButtons = ({ active, name, type, path }: ThisPropsType) => {
  return (
    <Box
      borderRadius={10}
      bgColor={active ? 'white' : undefined}
      p={2}
      mx={2}
      fontWeight={active ? 600 : 500}
    >
      {type === 'nav' ? (
        <NavLink to={path}>
          <Text
            fontSize={18}
            color={active ? 'red' : undefined}
            px={active ? 5 : undefined}
          >
            {name}
          </Text>
        </NavLink>
      ) : (
        <Box cursor="pointer">
          <Link to={path} smooth={true}>
            <Text
              fontSize={18}
              color={active ? 'red' : undefined}
              px={active ? 5 : undefined}
            >
              {name}
            </Text>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default NavButtons;
