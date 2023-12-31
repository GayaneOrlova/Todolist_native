import {StyleSheet} from 'react-native';

const TodoItemStyles = StyleSheet.create({
  todo_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 325,
    minHeight: 60,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: 5,
    borderColor: 'black',
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
  checkbox: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
});

export default TodoItemStyles;
