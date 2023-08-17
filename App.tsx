import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TodoScreen from './src/Homepage/TodoScreen';
import Detail from './src/DetailPage/Detail';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={{title: 'Todos'}}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{title: 'Detail information'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
