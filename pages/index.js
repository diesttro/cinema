import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container, Heading, Text, Box, Skeleton } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const response = await fetch('api/trending');
    const result = await response.json();

    return result?.data;
  };

  useEffect(() => {
    fetchTrending().then(setTrending);
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" py={8}>
        Cinema
      </Heading>
      <Text maxW="400px" mt={-6}>
        Take a quick look at trending and popular movies, or discover movies by genre
      </Text>
      <Box my={12}>
        <Heading size="lg" py={8}>
          Trending
        </Heading>
        <Swiper
          className="trending"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
        >
          {trending.length
            ? trending.map((trend) => (
                <SwiperSlide key={trend.id}>
                  <Box borderRadius="2xl" overflow="hidden">
                    <Image
                      alt={trend.title}
                      src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
                      width="240px"
                      height="360px"
                    />
                  </Box>
                </SwiperSlide>
              ))
            : Array(5)
                .fill()
                .map((_, index) => (
                  <SwiperSlide key={index}>
                    <Skeleton maxW="100%" pt="150%" borderRadius="2xl" />
                  </SwiperSlide>
                ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Home;
