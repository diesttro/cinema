import { Box, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box textAlign="center" py={8}>
      <Text>
        A personal project made to learn, see the source code on{' '}
        <Link href="https://github.com/diesttro/cinema" target="_blank" fontWeight="bold">
          GitHub
        </Link>
        .
      </Text>
      <Text>All data comes from TMDB.</Text>
    </Box>
  );
};

export default Footer;
