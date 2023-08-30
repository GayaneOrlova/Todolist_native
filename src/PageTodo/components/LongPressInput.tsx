import React, {useState} from 'react';
import {TextInput} from 'react-native';

type Props = {
  text: string;
  onChangeValue: (v: string) => void;
  onCloseInputForChange: (v: boolean) => void;
};

const LongPressInput: React.FC<Props> = props => {
  const [inputValue, setInputValue] = useState(props.text);

  const handleInputChange = (text: React.SetStateAction<string>) => {
    setInputValue(text);
  };

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

export default LongPressInput;
