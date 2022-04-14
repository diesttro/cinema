import { Container, Heading } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" py={8}>
        Cinema
      </Heading>
      {children}
    </Container>
  );
};

export default Layout;
