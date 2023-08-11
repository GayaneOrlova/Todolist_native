import React from 'react';
import {View} from 'react-native';
import {useAppSelector} from '../store/hooks';
import {Text} from 'react-native-elements';

type Props = {};

const CountOfUncheckedItems: React.FC<Props> = () => {
  const toDoList = useAppSelector(state => state.todos.toDoList);

  const arrOfCountChecked = toDoList.filter(item => !item.checked);
  const countOfUncheckedItems = arrOfCountChecked.length;

  return (
    <View>
      <Text>
        {countOfUncheckedItems}
        items left
      </Text>
    </View>
  );
};

export default CountOfUncheckedItems;
