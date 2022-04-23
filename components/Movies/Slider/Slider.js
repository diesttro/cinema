import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const Slider = ({ items, controls }) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        960: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      modules={[Navigation]}
      navigation={{
        prevEl: controls?.prev ?? controls,
        nextEl: controls?.next ?? controls,
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <NextLink href={`/movies/${item.id}`} passHref>
            <Link display="flex" borderRadius="2xl" overflow="hidden">
              <Image
                alt={item.title}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                width="300px"
                height="450px"
              />
            </Link>
          </NextLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
