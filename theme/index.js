import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#0A0A0A',
  white: '#E0E0E0',
};

const components = {
  Heading: {
    baseStyle: {
      fontWeight: 'normal',
    },
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const fonts = {
  heading: '"DM Serif Display", serif',
  body: 'Poppins, sans-serif',
};

const styles = {
  global: {
    body: {
      bg: 'black',
      color: 'white',
    },
  },
};

export default extendTheme({ colors, components, config, fonts, styles });
