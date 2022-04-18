import NextLink from 'next/link';
import { Container, Heading, Link } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Container maxW="container.xl" pt={4} pb={8}>
      <Heading as="h1" size="2xl" py={8}>
        <NextLink href="/" passHref>
          <Link _hover={{ textDecoration: 'none' }}>Cinema</Link>
        </NextLink>
      </Heading>
      {children}
    </Container>
  );
};

export default Layout;
