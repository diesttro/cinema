import { Heading, Text, Box, Flex, Spacer } from '@chakra-ui/react';
import { getUpcoming } from 'pages/api/upcoming';
import { getTrending } from 'pages/api/trending';
import { getGenres } from 'pages/api/genres';
import Slider, { Controls, useSliderControls } from 'components/Movies/Slider';
import Genres from 'components/Movies/Genres';

const Home = ({ upcoming, trending, genres }) => {
  const [upcomingControls, prevUpcoming, nextUpcoming] = useSliderControls();
  const [trendingControls, prevTrending, nextTrending] = useSliderControls();

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
            <Controls prev={prevUpcoming} next={nextUpcoming} />
          </Box>
        </Flex>
        <Slider items={upcoming} controls={upcomingControls} />
      </Box>
      <Box mt={12} mb={-4}>
        <Heading size="lg" py={8}>
          Genres
        </Heading>
        <Genres items={genres} />
      </Box>
      <Box my={12}>
        <Flex alignItems="center">
          <Heading size="lg" py={8}>
            Trending
          </Heading>
          <Spacer />
          <Box mt={4}>
            <Controls prev={prevTrending} next={nextTrending} />
          </Box>
        </Flex>
        <Slider items={trending} controls={trendingControls} />
      </Box>
    </>
  );
};

const getStaticProps = async () => {
  const results = await Promise.allSettled([getUpcoming(), getTrending(), getGenres()]);
  const [upcoming, trending, genres] = results.map((result) => result.value);

  return {
    props: { upcoming, trending, genres },
    revalidate: 1 * 24 * 60 * 60,
  };
};

export default Home;
export { getStaticProps };
