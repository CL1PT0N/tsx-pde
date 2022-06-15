import { Box, Icon } from '@chakra-ui/react';

type switcherButtonType = {
  title: string;
  value: string;
  statevalue: string;
  handleValue: any;
};

export default function SwitcherButton({
  title,
  value,
  statevalue,
  handleValue,
}: switcherButtonType) {
  const active = value === statevalue;

  return (
    // <Button onClick={() => handleValue(value)}>{title}</Button>
    <Box
      fontWeight={active ? 600 : 400}
      as="button"
      cursor="pointer"
      display="flex"
      flexDir="row"
      textTransform="capitalize"
      alignItems="center"
      justifyContent="end"
      textAlign="end"
      gap={1}
      onClick={() => handleValue(value)}
      color={active ? 'black' : 'grey'}
      transition="200"
    >
      <Icon
        viewBox="0 0 200 200"
        color="red.500"
        boxSize={active ? undefined : 0}
        transition="200ms"
      >
        <path
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>
      {title}
    </Box>
  );
}
