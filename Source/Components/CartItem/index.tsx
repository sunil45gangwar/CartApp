import React from 'react';
import {Alert, Image, Text, View} from 'react-native';
import styles from './CartStyle';
import Button from '../Common/Button';
import {useSelector} from 'react-redux';
import AppDispatcher from '../../Redux/Dispatchers/AppDispatcher';

interface CartItemProps {
  item: {
    key: string,
    item: {
      img: string,
      name: string,
      price: number,
      id: number,
    },
    quantity: number,
  };
}

const CartItem: React.FC<CartItemProps> = ({item}) => {
  const {cartData} = useSelector((store: any) => store);

  const onAddQuantity = (itemKey: string) => {
    let cartindex = cartData.findIndex((ele: any) => ele.key === itemKey);
    if (cartindex !== -1) {
      let cartItem = cartData[cartindex];
      if (cartItem.quantity === 10) {
        Alert.alert('Max Quantity Limit Is 10');
      } else {
        cartItem.quantity = cartItem.quantity + 1;
        cartData[cartindex] = cartItem;
        AppDispatcher.setCartItem(cartData);
      }
    } else {
      Alert.alert('Item Does Not Exist on cart');
    }
  };

  const onSubtractQuantity = (itemKey: string) => {
    let cartindex = cartData.findIndex((ele: any) => ele.key === itemKey);
    if (cartindex !== -1) {
      let cartItem = cartData[cartindex];
      if (cartItem.quantity === 1) {
        Alert.alert(
          'Min Quantity Limit Is 1. Please Discard the item from Cart',
        );
      } else {
        cartItem.quantity = cartItem.quantity - 1;
        cartData[cartindex] = cartItem;
        AppDispatcher.setCartItem(cartData);
      }
    } else {
      Alert.alert('Item Does Not Exist on cart');
    }
  };

  const onDiscardItem = (itemKey: string) => {
    let cartindex = cartData.findIndex((ele: any) => ele.key === itemKey);
    if (cartindex !== -1) {
      cartData.splice(cartindex, 1);
      console.log(cartData, 'after removing element');
      AppDispatcher.setCartItem(cartData);
    } else {
      Alert.alert('Item Does Not Exist on cart');
    }
  };

  const calculateItemPrice = (item: any) => {
    return item?.quantity * item?.item?.price;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: item?.item?.img,
          }}
          alt="image"
        />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.name}>{item?.item?.name}</Text>
        </View>
        <View style={styles.flexContainer}>
          <View>
            <Text style={styles.quantityText}>Quantity:</Text>
          </View>
          <View style={styles.flexContainerInner}>
            <View style={styles.smallButtonRd}>
              <Text
                style={styles.btnText}
                onPress={() => {
                  onSubtractQuantity(item.key);
                }}>
                -
              </Text>
            </View>
            <View style={styles.mainQty}>
              <Text style={styles.quantityText}>{item.quantity}</Text>
            </View>
            <View style={styles.smallButtonGreen}>
              <Text
                style={styles.btnText}
                onPress={() => {
                  onAddQuantity(item.key);
                }}>
                +
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.flexContainer}>
          <View>
            <Text style={styles.quantityText}>Price:</Text>
          </View>
          <View>
            <Text style={styles.name}>${calculateItemPrice(item)}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onClick={() => {
              onDiscardItem(item.key);
            }}
            title={'Discard Item'}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
