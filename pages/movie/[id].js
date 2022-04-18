import Image from 'next/image';
import { Heading, SimpleGrid, Center, Text, Box } from '@chakra-ui/react';
import { getMovie } from '../api/movie/[id]';

const Movie = ({ item }) => {
  return (
    <SimpleGrid
      columns={1}
      mt={12}
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
