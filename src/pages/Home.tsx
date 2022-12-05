import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, VStack } from 'native-base';
import React from 'react';
import { RootStackParams } from '../metadata';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const navigateToBasicExample = () => {
    navigation.navigate('BasicExample');
  }

  const navigateToReducerExample = () => {
    navigation.navigate('ReducerExample');
  }

  const navigateToZustandExample = () => {
    navigation.navigate('ZustandExample');
  }

  return (
    <VStack space="16px" padding="16px">
      <Button
        borderRadius="full"
        bgColor="orange.500"
        width="full"
        fontWeight="bold"
        onPress={navigateToBasicExample}>
        Navigate To Basic Example
      </Button>
      <Button
        borderRadius="full"
        bgColor="orange.500"
        width="full"
        fontWeight="bold"
        onPress={navigateToReducerExample}>
        Navigate To Reducer Example
      </Button>
      <Button
        borderRadius="full"
        bgColor="orange.500"
        width="full"
        fontWeight="bold"
        onPress={navigateToZustandExample}>
        Navigate To Zustand Example
      </Button>
    </VStack>
  )
}

export { Home }