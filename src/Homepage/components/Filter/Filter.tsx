import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {addManyItems, onClearComplited} from '../../store/todoSlice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getFiltersTodos, deleteCheckedTodo} from '../../api/todos.api';
import FilterStyles from './FilterStyles';

type Props = {};

const Filter: React.FC<Props> = () => {
  const toDoList = useAppSelector(state => state.todos.toDoList);
  const dispatch = useAppDispatch();
  const arrOfCountChecked = toDoList.filter(item => !item.checked);
  const countOfUncheckedItems = arrOfCountChecked.length;

  const onFilterItems = async (filter: string) => {
    try {
      const response = await getFiltersTodos({filter});
      dispatch(addManyItems(response.data));
    } catch (er) {
      console.log(er);
    }
  };

  const onTodoCheckedDelete = async () => {
    try {
      await deleteCheckedTodo();
      dispatch(onClearComplited());
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <View style={FilterStyles.container}>
      <Text>{countOfUncheckedItems}items left</Text>
      <View style={FilterStyles.filters}>
        <TouchableOpacity onPress={() => onFilterItems('all')}>
          <Text> ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onFilterItems('complited')}>
          <Text>COMPLITED</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onFilterItems('active')}>
          <Text>ACTIVE</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onTodoCheckedDelete}>
        <Text>Clear complited</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
