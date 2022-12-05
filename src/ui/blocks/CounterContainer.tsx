import { Box, Button, Heading, Text } from 'native-base';
import React from 'react';
import { useExampleStore } from '../../modules/example-reducer/store';

const CounterContainer = () => {
  const store = useExampleStore();
  const { counter } = store.state;

  return (
    <Box
      marginY="16px"
      padding="16px"
      borderRadius="lg"
      bgColor="orange.500">
      <Heading color="white">
        Counter Container
      </Heading>
      <Text
        fontSize="lg"
        color="white">{counter}
      </Text>
      <Button
        fontWeight="semibold"
        backgroundColor="red.500"
        borderRadius="full"
        marginTop="16px"
        onPress={store.reset}>
        Reset
      </Button>
    </Box>
  );
};

export { CounterContainer };
