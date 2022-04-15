import { Heading, Text, Box, Flex, IconButton, Spacer } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { getTrending } from 'pages/api/trending';
import { getUpcoming } from 'pages/api/upcoming';
import { getGenres } from 'pages/api/genres';
import MovieSlider from 'components/MovieSlider';
import MovieGenres from 'components/MovieGenres';
import useSliderControls from 'hooks/useSliderControls';

const Home = ({ trending, genres, upcoming }) => {
  const [upcomingControls, setUpcomingControl] = useSliderControls();
  const [trendingControls, setTrendingControl] = useSliderControls();

  return (
    <>
      <Text maxW="400px" mt={-6}>
        Take a look at upcoming and trending movies, or discover it by genre
      </Text>
      <Box my={12}>
        <Flex alignItems="center">
          <Heading size="lg" py={8}>
            Upcoming
          </Heading>
          <Spacer />
          <Box mt={4}>
            <IconButton
              ref={setUpcomingControl('prev')}
              aria-label="Prev"
              icon={<ArrowBackIcon />}
              mr={1}
            />
            <IconButton
              ref={setUpcomingControl('next')}
              aria-label="Next"
              icon={<ArrowForwardIcon />}
            />
          </Box>
        </Flex>
        <MovieSlider items={upcoming} controls={upcomingControls} />
      </Box>
      <Box mt={12} mb={-4}>
        <Heading size="lg" py={8}>
          Genres
        </Heading>
        <MovieGenres items={genres} />
      </Box>
      <Box my={12}>
        <Flex alignItems="center">
          <Heading size="lg" py={8}>
            Trending
          </Heading>
          <Spacer />
          <Box mt={4}>
            <IconButton
              ref={setTrendingControl('prev')}
              aria-label="Prev"
              icon={<ArrowBackIcon />}
              mr={1}
            />
            <IconButton
              ref={setTrendingControl('next')}
              aria-label="Next"
              icon={<ArrowForwardIcon />}
            />
          </Box>
        </Flex>
        <MovieSlider items={trending} controls={trendingControls} />
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
