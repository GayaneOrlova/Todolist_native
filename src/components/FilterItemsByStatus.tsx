import React from 'react';
import {View, Button} from 'react-native';
import {onClearComplited, setFilter, addManyItems} from '../store/todoSlice';
import {useAppDispatch} from '../store/hooks';
import {deleteCheckedTodo, getFiltersTodos} from '../api/todos.api';

type Props = {};

const FilterItemsByStatus: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const onFilterItems = async (filter: string) => {
    try {
      const response = await getFiltersTodos({filter});
      dispatch(addManyItems(response.data));
      dispatch(setFilter(filter));
    } catch (er) {
      console.log(er);
    }
  };

  const onTodoCheckedDelete = async () => {
    try {
      const response = await deleteCheckedTodo();
      console.log(response);

      dispatch(onClearComplited());
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <View>
      <Button onPress={() => onFilterItems('all')} title="All" />
      <Button onPress={() => onFilterItems('complited')} title="Complited" />
      <Button onPress={() => onFilterItems('active')} title="Active" />
      <Button onPress={onTodoCheckedDelete} title="Clear complited" />
    </View>
  );
};

export default FilterItemsByStatus;
