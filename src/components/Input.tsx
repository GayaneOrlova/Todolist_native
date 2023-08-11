import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Button} from 'react-native';

type Props = {
  onFormSubmit: (v: string) => void;
};

const Input: React.FC<Props> = props => {
  const [text, setText] = useState('');
  const onFormSubmit = () => {
    props.onFormSubmit(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        value={text}
        onChangeText={texts => setText(texts)}
        onSubmitEditing={onFormSubmit}
      />
      <Button title="Добавить" onPress={onFormSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    fontSize: 20,
    fontStyle: 'italic',
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: '#ededed',
    marginTop: 10,
    paddingLeft: 20,
  },
});

export default Input;
