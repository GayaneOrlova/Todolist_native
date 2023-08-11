import React, {useMemo} from 'react';
import {View} from 'react-native';
import ItemOfList from './ItemOfList';
import {useAppSelector} from '../../src/store/hooks';

type Props = {};

const ToDoList: React.FC<Props> = () => {
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
        <ItemOfList item={item} key={item.id} className="todo__list-item" />
      ))}
    </View>
  );
};

export default ToDoList;