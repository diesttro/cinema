import { Container, Heading, Text, Box, Tag } from '@chakra-ui/react';
import { getTrending } from './api/trending';
import { getPopular } from './api/popular';
import { getGenres } from './api/genres';
import MovieSlider from '../components/MovieSlider';

const Home = ({ trending, genres, popular }) => {
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
      <Box mt={12} mb={-4}>
        <Heading size="lg" py={8}>
          Genres
        </Heading>
        <Box>
          {genres.map((genre) => (
            <Tag key={genre.id} mb={4} mr={4} px={4} py={2}>
              {genre.name}
            </Tag>
          ))}
        </Box>
      </Box>
      <Box my={12}>
        <Heading size="lg" py={8}>
          Popular
        </Heading>
        <MovieSlider items={popular} />
      </Box>
    </Container>
  );
};

const getStaticProps = async (context) => {
  const results = await Promise.allSettled([getTrending(), getGenres(), getPopular()]);
  const [trending, genres, popular] = results.map((result) => result.value);

  return {
    props: { trending, genres, popular },
  };
};

export default Home;
export { getStaticProps };
