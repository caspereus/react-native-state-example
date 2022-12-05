import { useToast, Box, Text, Button, FlatList } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { useExampleStore } from '../modules/example-reducer/store';
import { CounterContainer } from '../ui/blocks';

const ZustandExample = () => {
  const toast = useToast();
  const store = useExampleStore();
  const { counter, items } = store.state;

  const onPressButton = () => store.increment();

  const renderItem = useCallback(({ item }: { item: number }) => {
    return (
      <Box padding="16px">
        <Text>{item}</Text>
      </Box>
    )
  }, [])

  useEffect(() => {
    toast.show({
      description: `Counter Updated: ${counter}`
    });
  }, [counter]);

  return (
    <>
      <Box padding="16px">
        <CounterContainer />
        <Text mb="16px">
          Counter Number : {counter}
        </Text>
        <Button
          width="full"
          onPress={onPressButton}>
          Press to Action
        </Button>
        <FlatList
          width="full"
          data={items}
          renderItem={renderItem}
        />
      </Box>
    </>
  )
}

export { ZustandExample }