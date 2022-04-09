import { useState, useEffect } from 'react';
import { Container, Heading, Text, Box } from '@chakra-ui/react';
import MovieSlider from '../components/MovieSlider';

const Home = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const response = await fetch('api/trending');
    const result = await response.json();

    return result?.data;
  };

  useEffect(() => {
    fetchTrending().then(setTrending);
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" py={8}>
        Cinema
      </Heading>
      <Text maxW="400px" mt={-6}>
        Take a quick look at trending and popular movies, or discover movies by genre
      </Text>
      <Box my={12}>
        <Heading size="lg" py={8}>
          Trending
        </Heading>
        <MovieSlider items={trending} />
      </Box>
    </Container>
  );
};

export default Home;
