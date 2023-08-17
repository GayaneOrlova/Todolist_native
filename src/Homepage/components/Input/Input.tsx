import React, {useState} from 'react';
import {TextInput, View, Image, TouchableOpacity} from 'react-native';
import {useAppSelector} from '../../store/hooks';
import ToggleOfCheck from '../ToggleOfCheck';
import InputStyles from './InputStyles';

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
    <View style={InputStyles.container}>
      {toDoList.length ? <ToggleOfCheck /> : null}
      <TextInput
        style={InputStyles.input}
        placeholder="What needs to be done?"
        value={text}
        onChangeText={texts => setText(texts)}
        onSubmitEditing={onFormSubmit}
      />
      <TouchableOpacity onPress={onFormSubmit}>
        <Image
          style={InputStyles.add}
          source={{
            uri: 'https://static.thenounproject.com/png/373675-200.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
