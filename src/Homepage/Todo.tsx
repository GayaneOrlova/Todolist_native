import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './components/Title';
import Input from './components/Input';
import ToDoList from './components/ToDoList';
import CountOfUncheckedItems from './components/CountOfUncheckedItems';
import FilterItemsByStatus from './components/FilterItemsByStatus';
import onDetailScreen from './components/ItemOfList';
import {useAppDispatch, useAppSelector} from './store/hooks';
import {addItem, addManyItems} from './store/todoSlice';
import {getAllTodos} from './api/todos.api';
import {postTodo} from './api/todos.api';

// type Props = {
//   item: Item;
// };

function Todo({navigation}) {
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
      if (!value.trim()) {
        return;
      }
      const response = await postTodo(value);
      dispatch(addItem(response.data));
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
      <View style={styles.input}>
        <Input onFormSubmit={onAddItem} />
      </View>
      <ToDoList navigation={navigation} />
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
  input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Todo;
