import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TodoScreen from '../PageTodo/TodoScreen';
import Detail from '../../src/DetailPage/Detail';
import LoginScreen from '../PageLogin/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {setUser} from '../store/slices/userSlice';
import {getUser} from '../api/user.api/user.api';

const Stack = createStackNavigator();

const MainStack: React.FC = () => {
  const [initialization, setInitialization] = useState(false);
  const isUser = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('access');
      if (!token) { return; }

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

  if (!initialization) { return null; }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isUser ? (
          <>
            <Stack.Screen
              name="Todo"
              component={TodoScreen}
              options={{title: 'Todos'}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{title: 'Login page'}}
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
};

export default MainStack;
