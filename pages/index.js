import { Container, Heading, Text, Box, Tag } from '@chakra-ui/react';
import { getTrending } from './api/trending';
import { getPopular } from './api/popular';
import { getGenres } from './api/genres';
import MovieSlider from '../components/MovieSlider';
import MovieGenres from '../components/MovieGenres';

const Home = ({ trending, genres, popular }) => {
  return (
    <>
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
        <MovieGenres items={genres} />
      </Box>
      <Box my={12}>
        <Heading size="lg" py={8}>
          Popular
        </Heading>
        <MovieSlider items={popular} />
      </Box>
    </>
  );
};

const getServerSideProps = async () => {
  const results = await Promise.allSettled([getTrending(), getGenres(), getPopular()]);
  const [trending, genres, popular] = results.map((result) => result.value);

  return {
    props: { trending, genres, popular },
  };
};

export default Home;
export { getServerSideProps };
