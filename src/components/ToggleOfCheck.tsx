import React from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {onToogleCheck} from '../store/todoSlice';
import {checkedAllTodo} from '../api/todos.api';
import {Switch} from 'react-native';

type Props = {};

const ToggleOfCheck: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const toDoList = useAppSelector(state => state.todos.toDoList);
  const isCheckedItem =
    toDoList.length !== 0 && !Boolean(toDoList.find(item => !item.checked));
  const onTodoCheckedAll = async () => {
    try {
      // const response = await checkedAllTodo();
      dispatch(onToogleCheck());
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <Switch
      ios_backgroundColor="#3e3e3e"
      onValueChange={onTodoCheckedAll}
      value={isCheckedItem}
    />
  );
};

export default ToggleOfCheck;
