import Head from 'next/head';
import Image from 'next/image';
import { Heading, SimpleGrid, Center, Text, Box } from '@chakra-ui/react';
import Genres from 'components/Movies/Genres';
import { getMovie } from 'pages/api/movie/[id]';
import { splitDateString, timeFromMinutes } from 'utils';

const formatRuntime = (hours, minutes) => {
  const hoursString = hours > 0 ? `${hours} h` : '';
  const minutesString = minutes > 0 ? `${minutes} min` : '';
  const runtiemString = `${hoursString} ${minutesString}`;

  return runtiemString.trim();
};

const Movie = ({ item }) => {
  const [hours, minutes] = timeFromMinutes(item.runtime);
  const hasRuntime = hours > 0 || minutes > 0;
  const releaseYear = splitDateString(item.release_date).year;

  return (
    <>
      <Head>
        <title>{item.title}</title>
      </Head>
      <SimpleGrid
        columns={1}
        my={12}
        sx={{
          '@media only screen and (min-width: 50rem)': {
            gridTemplateColumns: 'minmax(0, 300px) 1fr',
            gridGap: '2rem',
          },
        }}
      >
        <Center>
          <Box display="flex" borderRadius="2xl" overflow="hidden">
            <Image
              alt={item.title}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              width="300px"
              height="450px"
            />
          </Box>
        </Center>
        <Box>
          <Heading size="lg" py={8}>
            {item.title}
          </Heading>
          <Box display="flex" alignItems="center" mt={-6}>
            {hasRuntime && (
              <Text textTransform="uppercase" mr={4}>
                {formatRuntime(hours, minutes)}
              </Text>
            )}
            {releaseYear && <Text mr={4}>{releaseYear}</Text>}
          </Box>
          <Box my={4}>
            <Genres items={item.genres} />
          </Box>
          <Text>{item.overview}</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

const getServerSideProps = async (context) => {
  const { params } = context;
  const item = await getMovie(params.id);

  return { props: { item } };
};

export default Movie;
export { getServerSideProps };
