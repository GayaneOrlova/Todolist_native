import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {};

const Title: React.FC<Props> = () => {
  return (
    <View>
      <Text style={styles.title}>todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: 'Courier New,Courier,monospace',
    color: 'rgba(175,47,47,0.35)',
  },
});
export default Title;
