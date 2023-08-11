import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInput, TextInputChangeEventData} from 'react-native';

type Props = {
  text: string;
  onChangeValue: (v: string) => void;
  onCloseInputForChange: (v: boolean) => void;
};

const DoubleClickInput: React.FC<Props> = props => {
  const [inputValue, setInputValue] = useState(props.text);

  const onLoseFocus = (event: string) => {
    props.onChangeValue(event);
    props.onCloseInputForChange(true);
  };
  // const handleInputChange = (text: React.SetStateAction<string>) => {
  //   setInputValue(text);
  // };
  const handleInputChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    setInputValue(value);
  };
  // const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.key === 'Enter' && props.text.length > 0) {
      props.onChangeValue(inputValue);
      props.onCloseInputForChange(true);
    }
  };

  return (
    <TextInput
      onChangeText={handleInputChange}
      onBlur={onLoseFocus}
      onKeyUp={handleKeyUp}
      autoFocus
      defaultValue={inputValue}
      value={inputValue}
    />
  );
};

export default DoubleClickInput;
