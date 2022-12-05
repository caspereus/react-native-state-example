
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  BasicExample, ReducerExample, ZustandExample, Home, CustomHookExample
} from './pages';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { RootStackParams } from './metadata';


const App = () => {
  const Stack = createNativeStackNavigator<RootStackParams>();

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home" component={Home}
            />
            <Stack.Screen
              name="BasicExample" component={BasicExample}
            />
            <Stack.Screen
              name="ReducerExample" component={ReducerExample}
            />
            <Stack.Screen
              name="ZustandExample" component={ZustandExample}
            />
            <Stack.Screen
              name="CustomHookExample" component={CustomHookExample}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;