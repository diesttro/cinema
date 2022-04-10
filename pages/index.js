import { Container, Heading, Text, Box, Tag } from '@chakra-ui/react';
import { getTrending } from './api/trending';
import { getGenres } from './api/genres';
import MovieSlider from '../components/MovieSlider';

const Home = ({ trending, genres }) => {
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
      <Box my={12}>
        <Heading size="lg" py={8}>
          Genres
        </Heading>
        <Box>
          {genres.map((genre) => (
            <Tag key={genre.id} mr={4} mb={4} px={4} py={2}>
              {genre.name}
            </Tag>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

const getStaticProps = async (context) => {
  const [trending, genres] = await Promise.allSettled([getTrending(), getGenres()]);

  return {
    props: { trending: trending.value, genres: genres.value },
  };
};

export default Home;
export { getStaticProps };
