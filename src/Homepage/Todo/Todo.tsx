import React, {useEffect} from 'react';
import {View} from 'react-native';
import Title from '../components/Title/Title';
import Input from '../components/Input/Input';
import ToDoList from '../components/TodoList';
import CountOfUncheckedItems from '../components/CountOfUncheckedItems';
import Filter from '../components/Filter/Filter';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {addItem, addManyItems} from '../store/todoSlice';
import {getAllTodos} from '../api/todos.api';
import {postTodo} from '../api/todos.api';
import TodoStyles from './TodoStyles';

function Todo() {
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
    <View style={TodoStyles.container}>
      <Title />
      <View style={TodoStyles.input}>
        <Input onFormSubmit={onAddItem} />
      </View>
      <ToDoList />
      {toDoList.length ? (
        <View>
          <CountOfUncheckedItems />
          <Filter />
        </View>
      ) : null}
    </View>
  );
}

export default Todo;
