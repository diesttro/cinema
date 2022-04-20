import NextLink from 'next/link';
import { Container, Heading, Link } from '@chakra-ui/react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Container maxW="container.xl" py={4}>
      <Heading as="h1" size="2xl" py={8}>
        <NextLink href="/" passHref>
          <Link _hover={{ textDecoration: 'none' }}>Cinema</Link>
        </NextLink>
      </Heading>
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
