import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

const Genres = ({ items }) => {
  return items.map((item) => (
    <NextLink href={`/genre/${item.id}`} passHref>
      <Button as="a" fontWeight="normal" fontSize="sm" mr={2} mb={2}>
        {item.name}
      </Button>
    </NextLink>
  ));
};

export default Genres;
