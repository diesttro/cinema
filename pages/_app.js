import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'components/Layout';
import theme from 'theme';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
