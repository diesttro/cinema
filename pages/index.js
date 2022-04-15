import { Heading, Text, Box } from '@chakra-ui/react';
import { getTrending } from 'pages/api/trending';
import { getUpcoming } from 'pages/api/upcoming';
import { getGenres } from 'pages/api/genres';
import MovieSlider from 'components/MovieSlider';
import MovieGenres from 'components/MovieGenres';

const Home = ({ trending, genres, upcoming }) => {
  return (
    <>
      <Text maxW="400px" mt={-6}>
        Take a look at upcoming and trending movies, or discover it by genre
      </Text>
      <Box my={12}>
        <Heading size="lg" py={8}>
          Upcoming
        </Heading>
        <MovieSlider items={upcoming} />
      </Box>
      <Box mt={12} mb={-4}>
        <Heading size="lg" py={8}>
          Genres
        </Heading>
        <MovieGenres items={genres} />
      </Box>
      <Box my={12}>
        <Heading size="lg" py={8}>
          Trending
        </Heading>
        <MovieSlider items={trending} />
      </Box>
    </>
  );
};

const getServerSideProps = async () => {
  const results = await Promise.allSettled([getTrending(), getGenres(), getUpcoming()]);
  const [trending, genres, upcoming] = results.map((result) => result.value);

  return {
    props: { trending, genres, upcoming },
  };
};

export default Home;
export { getServerSideProps };
