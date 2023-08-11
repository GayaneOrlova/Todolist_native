import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './src/components/Title';
import Input from './src/components/Input';
import ToDoList from './src/components/ToDoList';
import CountOfUncheckedItems from './src/components/CountOfUncheckedItems';
import FilterItemsByStatus from './src/components/FilterItemsByStatus';
import ToggleOfCheck from './src/components/ToggleOfCheck';
import {useAppDispatch, useAppSelector} from './src/store/hooks';
import {
  // Item,
  addItem,
  addManyItems,
} from './src/store/todoSlice';
// import { itemRemove } from './store/todoSlice';
import {getAllTodos} from './src/api/todos.api';
import {postTodo} from './src/api/todos.api';

// type Props = {
//   item: Item;
//   id: string;
// };

function Todo() {
  // const toDoList = [
  //   {item: 'Todo1', id: '1', checked: false},
  //   {item: 'Todo2', id: '2', checked: false},
  // ];
  const toDoList = useAppSelector(state => state.todos.toDoList);
  const dispatch = useAppDispatch();

  const fetchAllTodosData = async () => {
    try {
      const response = await getAllTodos();
      dispatch(addManyItems(response.data));
    } catch (er) {
      console.log(er);
    }
  };
  const onAddItem = async (value: string) => {
    console.log('text:', value);
    try {
      // if (!value.trim()) {
      //   return;
      // }
      // const response = await postTodo(value);
      // dispatch(addItem(response.data));
      dispatch(addItem({
          value: value,
          id: String(Math.random()),
          checked: false,
        }),
      );
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    fetchAllTodosData();
  }, []);

  return (
    <View style={styles.container}>
      <Title />
      <View>
        <ToggleOfCheck />
        <Input onFormSubmit={onAddItem} />
      </View>
      <ToDoList />
      {toDoList.length ? (
        <View>
          <CountOfUncheckedItems />
          <FilterItemsByStatus />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center',
  },
});

export default Todo;
