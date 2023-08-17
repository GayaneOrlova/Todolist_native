import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Button} from 'react-native';
import {useAppSelector} from '../store/hooks';
import ToggleOfCheck from './ToggleOfCheck';

type Props = {
  onFormSubmit: (v: string) => void;
};
const Input: React.FC<Props> = props => {
  const toDoList = useAppSelector(state => state.todos.toDoList);
  const [text, setText] = useState('');
  const onFormSubmit = () => {
    props.onFormSubmit(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      {toDoList.length ? <ToggleOfCheck /> : null}
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        value={text}
        onChangeText={texts => setText(texts)}
        onSubmitEditing={onFormSubmit}
      />
      <Button color="rgba(175,47,47,0.35)" title="Add" onPress={onFormSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    borderWidth: 1,
    borderBottomWidth: 5,

    borderColor: '#ededed',
  },
  input: {
    fontSize: 20,
    fontStyle: 'italic',
    width: 250,
    height: 50,
    marginTop: 10,
    paddingLeft: 20,
  },
});

export default Input;