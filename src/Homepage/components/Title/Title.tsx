import React from 'react';
import {View, Text} from 'react-native';
import TitleStyles from './TitleStyles';

type Props = {};

const Title: React.FC<Props> = () => {
  return (
    <View>
      <Text style={TitleStyles.title}>todos</Text>
    </View>
  );
};

export default Title;
