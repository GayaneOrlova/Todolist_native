import React from 'react';
import {View, Text, Button} from 'react-native';

function DetailCard({navigation}) {
  const onHomepage = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Button title="Back to homepage" onPress={onHomepage} />
      <Text> Detail information</Text>
    </View>
  );
}

export default DetailCard;
