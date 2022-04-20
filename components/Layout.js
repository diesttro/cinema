import { Container } from '@chakra-ui/react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
  return (
    <Container maxW="container.xl" py={4}>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
