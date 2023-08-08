import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './CardStyle';
import Button from '../Common/Button';
import { useSelector } from 'react-redux';
import AppDispatcher from '../../Redux/Dispatchers/AppDispatcher';
import { useNavigation } from '@react-navigation/native';
import { NavigationPaths } from '../../Navigator/Constants/Index';

interface Item {
  id: string;
  img: string;
  name: string;
  price: number;
}

const Card: React.FC<{ item: Item }> = ({ item }) => {
  const cartData  = useSelector((store: any) => store.cartData);
  const navigation = useNavigation();

  const addToCart = (selectedItem: Item) => {
    if (cartData && cartData.length > 0) {
      const cartIndex = cartData.findIndex((ele: any) => ele.key === selectedItem.id);
      if (cartIndex === -1) {
        const newCart = [...cartData];
        const newItem = {
          item: selectedItem,
          key: selectedItem.id,
          quantity: 1,
        };
        newCart.push(newItem);
        AppDispatcher.setCartItem(newCart);
      } else {
        const cartItem = cartData[cartIndex];
        cartItem.quantity = cartItem.quantity + 1;
        cartData[cartIndex] = cartItem;
        AppDispatcher.setCartItem(cartData);
      }
    } else {
      const newCart = [
        {
          item: selectedItem,
          key: selectedItem.id,
          quantity: 1,
        },
      ];
      AppDispatcher.setCartItem(newCart);
    }
    navigateToCart();
  };

  const navigateToCart = () => {
    navigation.navigate(NavigationPaths.CART);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: item.img,
          }}
          alt="image"
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.name}>${item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onClick={() => {
            addToCart(item);
          }}
          title={'Add To Cart'}
        />
      </View>
    </View>
  );
};

export default Card;
