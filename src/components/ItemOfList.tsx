import React, {useState} from 'react';
import {StyleSheet, Switch, TextInput, TouchableOpacity, View} from 'react-native';
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
    <View style={styles.container}>
      <View style={props.item.checked ? styles.checked : styles.nochecked}>
        <View style={styles.view}>
          {/* <label htmlFor={'radio__button' + props.item.id}>
            <View style={styles.item__radio__button}> </View>
          </label> */}
          <TouchableOpacity>
            <View style={styles.item__radio__button} />
          </TouchableOpacity>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={props.item.checked ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onCheckedItem}
            value={props.item.checked}
          />

          {!showInputForChange ? (
            <Text
              style={
                props.item.checked ? styles.change__opacity : styles.nochange
              }
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
    flexDirection: 'row',
  },
  checked: {
    // textDecoration: 'line-through',
    // border: 'none',
    paddingRight: 10,
  },
  nochecked: {
    // border: 'none',
    paddingRight: 10,
  },
  view: {
    display: 'flex',
    alignItems: 'center',
  },
  item__radio__button: {
    width: 20,
    height: 20,
    paddingRight: 10,
  },
  toggle: {
    opacity: 0,
    position: 'absolute',
    width: 0,
    height: 0,
  },
  change__opacity: {
    opacity: 0.3,
    width: '100%',
    // display: 'contents',
  },
  nochange: {
    opacity: 1,
    width: '100%',
    // display: contents,
  },
});

export default ItemOfList;
