import React, {useMemo} from 'react';
import {View} from 'react-native';
import ItemOfList from './TodoItem/TodoItem';
import {useAppSelector} from '../store/hooks';

const TodoList = () => {
  const toDoList = useAppSelector(state => state.todos.toDoList);
  const filter = useAppSelector(state => state.todos.filter);

  const filterList = useMemo(() => {
    return toDoList.filter(item => {
      if (filter === 'active') {
        return !item.checked;
      }
      if (filter === 'complited') {
        return item.checked;
      }
      return item;
    });
  }, [toDoList, filter]);

  return (
    <View>
      {filterList.map(item => (
        <ItemOfList item={item} key={item.id} />
      ))}
    </View>
  );
};

export default TodoList;
