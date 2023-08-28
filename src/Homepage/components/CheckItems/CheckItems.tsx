import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {onToogleCheck} from '../../../store/slices/todoSlice';
import {checkedAllTodo} from '../../../api/todos.api/todos.api';
import CheckItemsStyles from './CheckItemsStyles';

type Props = {};

const CheckItems: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const toDoList = useAppSelector(state => state.todos.toDoList);
  const isCheckedItem =
    toDoList.length !== 0 && !toDoList.find(item => !item.checked);

  const onTodoCheckedAll = async () => {
    try {
      await checkedAllTodo();
      dispatch(onToogleCheck());
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <CheckBox
      style={CheckItemsStyles.check_all}
      onCheckColor="green"
      onTintColor="green"
      disabled={false}
      value={isCheckedItem}
      onValueChange={onTodoCheckedAll}
    />
  );
};

export default CheckItems;
