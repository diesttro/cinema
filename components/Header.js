import NextLink from 'next/link';
import { Heading, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <Heading as="h1" size="2xl" py={8}>
      <NextLink href="/" passHref>
        <Link _hover={{ textDecoration: 'none' }}>Cinema</Link>
      </NextLink>
    </Heading>
  );
};

export default Header;
