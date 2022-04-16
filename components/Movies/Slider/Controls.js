import { Flex, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Controls = ({ prevRef, nextRef }) => {
  return (
    <Flex>
      <IconButton ref={prevRef} aria-label="Prev" icon={<ArrowBackIcon />} mr={1} />
      <IconButton ref={nextRef} aria-label="Next" icon={<ArrowForwardIcon />} />
    </Flex>
  );
};

export default Controls;
