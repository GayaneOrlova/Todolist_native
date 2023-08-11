import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import DoubleClickInput from './DoubleClickInput';
import {
  onTodoItemChecked,
  onTodoItemRemove,
  onChangeValue,
  Item,
} from '../../src/store/todoSlice';
import {useAppDispatch} from '../../src/store/hooks';
import {deleteTodo, putTodo} from '../../src/api/todos.api';
import {Button, Text} from 'react-native-elements';

type Props = {
  item: Item;
  className: string;
};

const ItemOfList: React.FC<Props> = props => {
  const [showInputForChange, setShowInputForChange] = useState(false);
  const dispatch = useAppDispatch();
  const onCheckedItem = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const response = await putTodo({
        id: props.item.id,
        checked: ev.target.checked,
      });
      dispatch(onTodoItemChecked(response.data));
    } catch (er) {
      console.log(er);
    }
  }

  const onItemRemove = async () => {
    try {
      const response = await deleteTodo(props.item.id);
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
  return (
    <View>
      <View className={props.item.checked ? `checked` : `nochecked`}>
        <View className="view">
          <label htmlFor={'radio__button' + props.item.id}>
            <View className="item__radio__button"> </View>
          </label>

          <TextInput
            id={'radio__button' + props.item.id}
            className="toggle"
            type="checkbox"
            onChangeText={onCheckedItem}
            defaultChecked={props.item.checked}
          />

          {!showInputForChange ? (
            <Text
              className={props.item.checked ? 'change__opacity' : 'nochange'}
              onDoubleClick={handleDoubleClick}>
              {props.item.value}
            </Text>
          ) : (
            <DoubleClickInput
              text={props.item.value}
              onChangeValue={changeValue}
              onCloseInputForChange={closeInputForChange}
            />
          )}
        </View>
      </View>
      <Button onPress={onItemRemove} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    fontSize: 20,
    fontStyle: 'italic',
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: '#ededed',
    marginTop: 10,
    paddingLeft: 20,
  },
});

export default ItemOfList;
