import React from 'react';
import {Button, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {deleteCheckedTodo} from '../api/todos.api';
import {onClearComplited} from '../store/todoSlice';

type Props = {};

const CountOfUncheckedItems: React.FC<Props> = () => {
  const toDoList = useAppSelector(state => state.todos.toDoList);
  const dispatch = useAppDispatch();
  const arrOfCountChecked = toDoList.filter(item => !item.checked);
  const countOfUncheckedItems = arrOfCountChecked.length;

  const onTodoCheckedDelete = async () => {
    try {
      await deleteCheckedTodo();
      dispatch(onClearComplited());
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
      <Text>
        {countOfUncheckedItems}
        items left
      </Text>
      <TouchableOpacity onPress={onTodoCheckedDelete}>
        <Text style={{fontSize: 14}}>Clear complited</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountOfUncheckedItems;
