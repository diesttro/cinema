import Image from 'next/image';
import { Heading, SimpleGrid, Center, Text, Box } from '@chakra-ui/react';
import Genres from 'components/Movies/Genres';
import { getMovie } from 'pages/api/movie/[id]';
import { splitDateString, timeFromMinutes } from 'utils';

const formatRuntime = (hours, minutes) => {
  const hoursString = `${hours} h`;
  const minutesString = `${String(minutes).padStart(2, 0)} min`;

  return minutes > 0 ? `${hoursString} ${minutesString}` : hoursString;
};

const Movie = ({ item }) => {
  return (
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
          <Text textTransform="uppercase">{formatRuntime(...timeFromMinutes(item.runtime))}</Text>
          <Text ml={4}>{splitDateString(item.release_date).year}</Text>
        </Box>
        <Box my={4}>
          <Genres items={item.genres} />
        </Box>
        <Text>{item.overview}</Text>
      </Box>
    </SimpleGrid>
  );
};

const getServerSideProps = async (context) => {
  const { params } = context;
  const item = await getMovie(params.id);

  return { props: { item } };
};

export default Movie;
export { getServerSideProps };
