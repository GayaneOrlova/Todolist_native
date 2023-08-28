import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {postUser} from '../api/user.api/user.api';
import {useAppDispatch} from '../store/hooks';
import {View, TouchableOpacity, Image, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginStyles from './LoginStyles';
import {setUser} from '../store/slices/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log('a', email);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const onHomepage = () => {
    navigation.navigate('Todo');
  };

  const onEmailChange = text => {
    setEmail(text);
  };

  const onPasswordChange = text => {
    setPassword(text);
  };

  // const onLogin = async (value: {email: string; password: string}) => {
  const onLogin = async () => {
    try {
      const response = await postUser({email, password});
      await AsyncStorage.setItem('access', response.data.tokens.access);
      console.log('a:', response.data.tokens.access);
      dispatch(setUser(response.data.user));
      navigation.navigate('Todo');
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={onHomepage}>
        <Image
          style={LoginStyles.home_icon}
          source={{
            uri: 'https://w7.pngwing.com/pngs/752/415/png-transparent-e-commerce-computer-icons-shopping-others-angle-text-triangle-thumbnail.png',
          }}
        />
      </TouchableOpacity>
      <TextInput
        style={LoginStyles.input_container}
        placeholder="Email"
        value={email}
        onChangeText={texts => setEmail(texts)}
        onChange={onEmailChange}
      />
      <TextInput
        style={LoginStyles.input_container}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={texts => setPassword(texts)}
        onChange={onPasswordChange}
      />
      <Button title="LOGIN" onPress={onLogin} />
    </View>
  );
};

export default Login;
