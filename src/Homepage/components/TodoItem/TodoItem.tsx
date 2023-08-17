import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Switch, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import LongPressInput from '../LongPressInput';
import {
  onTodoItemChecked,
  onTodoItemRemove,
  onChangeValue,
  Item,
} from '../../store/todoSlice';
import {useAppDispatch} from '../../store/hooks';
import {deleteTodo, putTodo} from '../../api/todos.api';
import TodoItemStyles from './TodoItemStyles';

type Props = {
  item: Item;
};

const TodoItem: React.FC<Props> = props => {
  const [showInputForChange, setShowInputForChange] = useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

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

  const onDetailScreen = () => {
    navigation.navigate('Detail', props.item);
  };

  return (
    <View>
      <View>
        <View style={TodoItemStyles.todo_item}>
          <Switch
            ios_backgroundColor="#3e3e3e"
            onValueChange={onCheckedItem}
            value={props.item.checked}
          />
          {!showInputForChange ? (
            <View>
              <TouchableOpacity
                onLongPress={handleDoubleClick}
                onPress={onDetailScreen}>
                <Text style={TodoItemStyles.todo_item_text}>
                  {props.item.value}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <LongPressInput
              text={props.item.value}
              onChangeValue={changeValue}
              onCloseInputForChange={closeInputForChange}
            />
          )}
          <View>
            <TouchableOpacity onPress={onItemRemove}>
              <Image
                style={TodoItemStyles.delete}
                source={{
                  uri: 'https://w7.pngwing.com/pngs/221/443/png-transparent-bin-delete-recycle-remove-trash-basic-user-interface-icon-thumbnail.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodoItem;
