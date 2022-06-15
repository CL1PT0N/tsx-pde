import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  colors: {
    red_darker: '#E10808',
    red_lighter: '#E70000',
    grey_bg: '#F7F7F7',
    teal_custom:'#00DDB5',
    teal_customdarker:'#00C8A4',
    teal_custompress:'#00AA8B',
    table_head:'#474747',
    table_odd:'#F0F0F0',
    table_even:'#F7F7F7',

    edit_bg:'#58ADFC',
    edit_hover:'#2B98FD',
    edit_press:'#0085FF',

    delete_bg:'#E7008A',
    delete_hover:'#ca0079',
    delete_press:'#9e005f',

    put_bg:'#FF9B05',
    put_hover:'#cf7c00',
    put_press:'#c37500',
  },
});

export default theme;
