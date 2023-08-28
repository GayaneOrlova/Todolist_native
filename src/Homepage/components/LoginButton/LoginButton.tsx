import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LoginButtonStyles from './LoginButtonStyles';
import {useNavigation} from '@react-navigation/native';

const LoginButton = () => {
  const navigation = useNavigation();
  const onLoginPage = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <TouchableOpacity
        style={LoginButtonStyles.container}
        onPress={onLoginPage}>
        <Image
          style={LoginButtonStyles.login_icon}
          source={{
            uri: 'https://w7.pngwing.com/pngs/397/915/png-transparent-computer-icons-login-login-button-miscellaneous-angle-text.png',
          }}
        />
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;
