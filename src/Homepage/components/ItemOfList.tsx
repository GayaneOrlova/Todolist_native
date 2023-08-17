import React, {useState} from 'react';
import {StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import DoubleClickInput from './DoubleClickInput';
import {
  onTodoItemChecked,
  onTodoItemRemove,
  onChangeValue,
  Item,
} from '../store/todoSlice';
import {useAppDispatch} from '../store/hooks';
import {deleteTodo, putTodo} from '../api/todos.api';

type Props = {
  item: Item;
};

const ItemOfList: React.FC<Props> = (props, {navigation}) => {
  const [showInputForChange, setShowInputForChange] = useState(false);
  const dispatch = useAppDispatch();

  const onCheckedItem = async (ev: boolean) => {
    try {
      const response = await putTodo({
        id: props.item.id,
        checked: ev,
      });
      dispatch(onTodoItemChecked(response.data));
    } catch (er) {
      console.log(er);
    }
  };

  const onItemRemove = async () => {
    try {
      await deleteTodo(props.item.id);
      dispatch(onTodoItemRemove(props.item.id));
    } catch (er) {
      console.log(er);
    }
  };
  const changeValue = async (value: string) => {
    try {
      const response = await putTodo({id: props.item.id, value});
      dispatch(onChangeValue(response.data));
    } catch (er) {
      console.log(er);
    }
  };
  const handleDoubleClick = () => {
    setShowInputForChange(true);
  };
  const closeInputForChange = () => {
    setShowInputForChange(false);
  };

  // const onDetailScreen = () => {
  //   navigation.navigate('DetailScreen', props.item);
  // };

  return (
    <View>
      <View>
        <View style={styles.todo_item}>
          <Switch
            ios_backgroundColor="#3e3e3e"
            onValueChange={onCheckedItem}
            value={props.item.checked}
          />
          {!showInputForChange ? (
            <View>
              <TouchableOpacity onLongPress={handleDoubleClick}>
                <Text style={styles.todo_item_text}>{props.item.value}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <DoubleClickInput
              text={props.item.value}
              onChangeValue={changeValue}
              onCloseInputForChange={closeInputForChange}
            />
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', props.item)}>
            <Text style={styles.navigate}>Detail</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={onItemRemove}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 355,
    height: 60,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: '#ededed',
  },
  delete: {
    color: 'rgba(175,47,47,0.35)',
  },
  todo_item_text: {
    fontSize: 24,
  },
  navigate: {
    color: 'rgba(175,47,47,0.35)',
  },
});

export default ItemOfList;
