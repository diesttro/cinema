import { Flex, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Controls = ({ prev, next }) => {
  return (
    <Flex>
      <IconButton ref={prev} aria-label="Prev" icon={<ArrowBackIcon />} mr={1} />
      <IconButton ref={next} aria-label="Next" icon={<ArrowForwardIcon />} />
    </Flex>
  );
};

export default Controls;
