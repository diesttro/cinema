import Image from 'next/image';
import { Box, Skeleton } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MovieSlider = ({ items }) => {
  return (
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
      {items.length
        ? items.map((item) => (
            <SwiperSlide key={item.id}>
              <Box borderRadius="2xl" overflow="hidden">
                <Image
                  alt={item.title}
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
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
  );
};

export default MovieSlider;