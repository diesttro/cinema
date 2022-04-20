import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NextLink from 'next/link';
import { SimpleGrid, Box, Link, Skeleton } from '@chakra-ui/react';
import InfiniteScroll from 'components/InfiniteScroll';

const Movies = () => {
  const [items, setItems] = useState([]);
  const { query } = useRouter();
  const page = useRef(1);

  const getGenreMovies = async () => {
    const response = await fetch(`/api/genre/${query.id}?page=${page.current++}`);
    const result = await response.json();

    setItems((items) => [...items, ...result?.data]);
  };

  useEffect(() => {
    if (query?.id) {
      getGenreMovies();
    }
  }, [query]);

  return (
    <SimpleGrid columns={[2, 3, 4]} gap={[2, 4, 6]} my={12}>
      <InfiniteScroll
        onReachEnd={getGenreMovies}
        loadingStatus={Array(8)
          .fill()
          .map((_, index) => (
            <Skeleton key={index} maxWidth="100%" pt="150%" borderRadius="2xl" />
          ))}
      >
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
      </InfiniteScroll>
    </SimpleGrid>
  );
};

export default Movies;
