import {StyleSheet} from 'react-native';

const TodoItemStyles = StyleSheet.create({
  todo_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 345,
    height: 60,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: 'grey',
  },
  delete: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  todo_item_text: {
    fontSize: 20,
    width: 180,
    opacity: 0.8,
  },
});

export default TodoItemStyles;
