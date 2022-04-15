import NextLink from 'next/link';
import { Tag, TagLabel, Link } from '@chakra-ui/react';

const MovieGenres = ({ items }) => {
  return items.map((item) => (
    <Tag key={item.id} mb={4} mr={4} px={4} py={2}>
      <NextLink href={`/genre/${item.id}`} passHref>
        <Link>
          <TagLabel>{item.name}</TagLabel>
        </Link>
      </NextLink>
    </Tag>
  ));
};

export default MovieGenres;
