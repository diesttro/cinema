import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NextLink from 'next/link';
import { SimpleGrid, Box, Link, Skeleton } from '@chakra-ui/react';

const Movies = () => {
  const { query } = useRouter();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getGenreMovies = async () => {
      const response = await fetch(`/api/genre/${query.id}`);
      const result = await response.json();

      setItems(result?.data);
    };

    if (query?.id) getGenreMovies();
  }, [query]);

  return (
    <SimpleGrid columns={[2, 3, 4]} gap={[2, 4, 6]} mt={12}>
      {items.length
        ? items.map((item) => (
            <Box key={item.id}>
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
          ))
        : Array(8)
            .fill()
            .map((_, index) => (
              <Skeleton key={index} maxWidth="100%" pt="150%" borderRadius="2xl" />
            ))}
    </SimpleGrid>
  );
};

export default Movies;
