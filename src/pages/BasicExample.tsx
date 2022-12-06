import { useNavigation } from '@react-navigation/native';
import { Box, Button, FlatList, Text, useToast } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';

const BasicExample = () => {
  const toast = useToast();
  const [counter, setCounter] = useState<number>(0);
  const [historyItems, setHistoryItems] = useState<number[]>([]);

  const incrementCounter = () => {
    setCounter((value) => value + 1);
  }

  const addItem = () => {
    setHistoryItems([...historyItems, counter])
  }

  const onPressButton = () => {
    incrementCounter();
  }

  useEffect(() => {
    addItem();
    toast.show({
      description: `Counter Updated: ${counter}`
    });
  }, [counter]);

  const renderItem = useCallback(({ item }: { item: number }) => {
    return (
      <Box padding="16px">
        <Text>{item}</Text>
      </Box>
    )
  }, [])

  return (
    <>
      <Box padding="16px">
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
          data={historyItems}
          renderItem={renderItem}
        />
      </Box>
    </>
  )
}

export { BasicExample }