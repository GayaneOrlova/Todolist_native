import {Text, View} from 'react-native';
import LoginButton from '../PageTodo/components/LoginButton/LoginButton';
import React from 'react';
import HomepageStyles from './HomepageStyles';

function Homepage() {
  return (
    <View>
      <LoginButton />
      <Text style={HomepageStyles.introduction}>
        Hello! If you want to see the to-do list, please log in!
      </Text>
    </View>
  );
}

export default Homepage;
