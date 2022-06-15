import { Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type PengajuanItemsType = {
  title: string;
  path: string;
};

export default function PengajuanItem({ title, path }: PengajuanItemsType) {
  const location = useLocation();
  const active = path == location.pathname;

  return (
    <NavLink to={path}>
      <Button
        transition="200ms"
        my={1}
        fontWeight={500}
        py={6}
        justifyContent="start"
        width="100%"
        bg="white"
        borderRadius="22px"
        color={active ? 'red' : undefined}
      >
        {title}
      </Button>
    </NavLink>
  );
}
