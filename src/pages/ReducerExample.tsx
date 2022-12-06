import { Box, Button, FlatList, Text, useToast } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { useExampleReducer } from '../modules/example-reducer/store';

const ReducerExample = () => {
  const toast = useToast();
  const [state, dispatch] = useExampleReducer();

  const onPressButton = () => {
    dispatch({ _tag: 'INCREMENT_COUNTER' })
  }

  const renderItem = useCallback(({ item }: { item: number }) => {
    return (
      <Box padding="16px">
        <Text>{item}</Text>
      </Box>
    )
  }, [])

  useEffect(() => {
    toast.show({
      description: `Counter Updated: ${state.counter}`
    });
  }, [state.counter]);

  return (
    <>
      <Box padding="16px">
        <Text mb="16px">
          Counter Number : {state.counter}
        </Text>
        <Button
          width="full"
          onPress={onPressButton}>
          Press to Action
        </Button>
        <FlatList
          width="full"
          data={state.historyItems}
          renderItem={renderItem}
        />
      </Box>
    </>
  )
}

export { ReducerExample }