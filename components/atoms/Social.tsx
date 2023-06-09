import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type Props = {
  isFooter: boolean;
};
export const Social = (props) => {
  const { isFooter = false } = props;
  return (
    <Flex
      as="ul"
      alignItems="center"
      justify="center"
      mr={{ base: '0', md: 0 }}
    >
      <Button
        as="a"
        bg={isFooter ? 'gray.300' : '#ffffff'}
        href="https://twitter.com/afim_tomo"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </Button>
      <Button
        as="a"
        href="https://github.com/evenkareji"
        bg={isFooter ? 'gray.300' : '#ffffff'}
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Button>
    </Flex>
  );
};
