import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getItemDetail} from '../Homepage/api/todos.api';
import {Item} from '../Homepage/store/todoSlice';
import ItemDetailStyles from './DetailStyles';

type Props = {
  item: Item;
};

const ItemDetail: React.FC<Props> = props => {
  const navigation = useNavigation();
  const onHomepage = () => {
    navigation.navigate('Todo', props.item);
  };

  const [itemDetail, setItemDetail] = useState<Item>();
  const route = useRoute();
  const id = route.params?.id;

  const getTodoItemDetail = async () => {
    if (!id) {return;}

    try {
      const response = await getItemDetail(id);
      setItemDetail(response.data);
      console.log('aaaa', itemDetail);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    getTodoItemDetail();
  }, []);

  if (!itemDetail) { return null; }
  return (
    <View>
      <TouchableOpacity onPress={onHomepage}>
        <Image
          style={ItemDetailStyles.home_icon}
          source={{
            uri: 'https://w7.pngwing.com/pngs/752/415/png-transparent-e-commerce-computer-icons-shopping-others-angle-text-triangle-thumbnail.png',
          }}
        />
      </TouchableOpacity>
      <Text style={ItemDetailStyles.title}>Todo information </Text>
      <View>
        <Text style={ItemDetailStyles.description}>
          Описание задания: {itemDetail.value}
        </Text>
        <Text style={ItemDetailStyles.description}>
          Номер задания: {itemDetail.id}
        </Text>
        <Text style={ItemDetailStyles.description}>
          Статус: {itemDetail.checked ? 'выполнено' : 'не выполнено'}
        </Text>
      </View>
    </View>
  );
};

export default ItemDetail;
