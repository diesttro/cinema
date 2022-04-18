import Image from 'next/image';
import NextLink from 'next/link';
import { SimpleGrid, Box, Link } from '@chakra-ui/react';
import { getGenre } from '../api/genre/[id]';

const Movies = ({ items }) => {
  return (
    <SimpleGrid columns={[2, 3, 4]} gap={[0, 1, 2]} mt={12}>
      {items.map((item) => (
        <Box key={item.id} mr={4} mb={4}>
          <NextLink href={`/movie/${item.id}`} passHref>
            <Link display="flex" borderRadius="2xl" overflow="hidden">
              <Image
                alt={item.title}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                width="300px"
                height="450px"
              />
            </Link>
          </NextLink>
        </Box>
      ))}
    </SimpleGrid>
  );
};

const getServerSideProps = async (context) => {
  const { params } = context;
  const items = await getGenre(params.id);

  return { props: { items } };
};

export default Movies;
export { getServerSideProps };
