import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LoginButtonStyles from './LogoutButton.styles';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../../store/slices/userSlice';
import {useAppDispatch} from '../../../store/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const onLogoutPage = () => {
    dispatch(logout());
    AsyncStorage.removeItem('access');
    navigation.navigate('Todo');
  };

  return (
    <View>
      <TouchableOpacity
        style={LoginButtonStyles.container}
        onPress={onLogoutPage}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;
