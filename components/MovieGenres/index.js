import Link from 'next/link';
import { Button, Tag, Link as Anchor } from '@chakra-ui/react';

const MovieGenres = ({ items }) => {
  return items.map((item) => (
    <Tag key={item.id} mb={4} mr={4} px={4} py={2}>
      <Link href={`/genre/${item.id}`} passHref>
        <Anchor>{item.name}</Anchor>
      </Link>
    </Tag>
  ));
};

export default MovieGenres;
