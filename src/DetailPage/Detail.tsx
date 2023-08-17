import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function DetailCard() {
  const navigation = useNavigation();

  const onHomepage = () => {
    navigation.navigate('Todo');
    // navigation.goBack();
  };

  return (
    <View>
      <Button title="Go back" onPress={onHomepage} />
      <Text> Detail information</Text>
    </View>
  );
}

export default DetailCard;
