import { Center, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Center textAlign="center" py={8}>
      <Text fontSize="sm" maxWidth="32rem">
        A personal project made to learn, you can see the source code on{' '}
        <Link href="https://github.com/diesttro/cinema" target="_blank" fontWeight="bold">
          GitHub
        </Link>
        . All data comes from TMDB.
      </Text>
    </Center>
  );
};

export default Footer;
