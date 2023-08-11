import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInput, TextInputChangeEventData} from 'react-native';

type Props = {
  text: string;
  onChangeValue: (v: string) => void;
  onCloseInputForChange: (v: boolean) => void;
};

const DoubleClickInput: React.FC<Props> = props => {
  const [inputValue, setInputValue] = useState(props.text);

  const handleInputChange = (text: React.SetStateAction<string>) => {
    setInputValue(text);
  };
  // const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  const handleKeyUp = () => {
    props.onChangeValue(inputValue);
    props.onCloseInputForChange(true);
  };

  return (
    <TextInput
      onChangeText={handleInputChange}
      onSubmitEditing={handleKeyUp}
      autoFocus
      defaultValue={inputValue}
      value={inputValue}
    />
  );
};

export default DoubleClickInput;
