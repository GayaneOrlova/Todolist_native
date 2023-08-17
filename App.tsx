import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import TodoScreen from './src/Homepage/TodoScreen';
import DetailScreen from './src/DetailPage/DetailScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodoScreen"
          component={TodoScreen}
          options={{title: 'Todos'}}
        />

        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{title: 'Detail information'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
