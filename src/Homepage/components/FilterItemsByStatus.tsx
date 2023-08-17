import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {addManyItems, onClearComplited} from '../store/todoSlice';
import {useAppDispatch} from '../store/hooks';
import {deleteCheckedTodo, getFiltersTodos} from '../api/todos.api';

type Props = {};

const FilterItemsByStatus: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

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
      const response = await deleteCheckedTodo();
      console.log(response);
      dispatch(onClearComplited());
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <View style={styles.filter_container}>
      <Button
        color="rgba(175,47,47,0.35)"
        onPress={() => onFilterItems('all')}
        title="All"
      />
      <Button
        color="rgba(175,47,47,0.35)"
        onPress={() => onFilterItems('complited')}
        title="Complited"
      />
      <Button
        color="rgba(175,47,47,0.35)"
        onPress={() => onFilterItems('active')}
        title="Active"
      />
      <Button
        color="rgba(175,47,47,0.35)"
        onPress={onTodoCheckedDelete}
        title="Clear complited"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filter_container: {
    flexDirection: 'row',
    marginTop: 25,
  },
});

export default FilterItemsByStatus;
