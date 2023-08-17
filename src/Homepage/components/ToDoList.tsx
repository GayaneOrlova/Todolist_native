import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import ItemOfList from './ItemOfList';
import {useAppSelector} from '../store/hooks';

const ToDoList = () => {
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
    <View style={styles.todolist_item}>
      {filterList.map(item => (
        <ItemOfList item={item} key={item.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  todolist_item: {
    borderColor: 'red',
  },
  pressable: {
    color: 'blue',
  },
});

export default ToDoList;
