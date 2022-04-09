import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      bg: 'black',
      color: 'white',
    },
  },
};

const colors = {
  black: '#0D0D0D',
  white: '#FBFBFB',
};

const fonts = {
  heading: '"DM Serif Display", serif',
  body: 'Poppins, sans-serif',
};

export default extendTheme({ config, styles, colors, fonts });
