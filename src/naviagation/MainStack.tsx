import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TodoScreen from '../../src/Homepage/TodoScreen';
import Detail from '../../src/DetailPage/Detail';
import LoginScreen from '../../src/Login/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../store/hooks';
import { setUser } from '../store/slices/userSlice';
import { getUser } from '../api/user.api/user.api';

const Stack = createStackNavigator();

const MainStack: React.FC = () => {
  const [initialization, setInitialization] = useState(false);
  const [userToken, setUserToken] = useState('');

  const dispatch = useAppDispatch();

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('access');
      if (!token) {
        return;
      }
      setUserToken(token);
      const response = await getUser();
      const user = response.data;
      dispatch(setUser(user));
    } catch (er) {
      console.log(er);
    } finally {
      setInitialization(true);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  // if (!initialization) { return null; }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userToken ? (
          <>
            <Stack.Screen
              name="Todo"
              component={TodoScreen}
              options={{title: 'Todos'}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Login page',
                animationTypeForReplace: userToken ? 'pop' : 'push',
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{title: 'Detail information'}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
