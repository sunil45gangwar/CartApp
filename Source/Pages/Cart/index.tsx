import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import CartItem from '../../Components/CartItem';
import Button from '../../Components/Common/Button';

interface CartItem {
  key: string;
  item: {
    price: number,
    name: string,
    img: string,
    id: number,
  };
  quantity: number;
}

const Cart: React.FC = () => {
  const {cartData} = useSelector((store: any) => store);

  const calculateTotalPrice = (): number => {
    let price = 0;
    cartData.length > 0 &&
      cartData.forEach((element: CartItem) => {
        price = price + element.quantity * element.item.price;
      });
    return price;
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="always"
        data={cartData}
        renderItem={({item}: {item: CartItem}) => <CartItem  item={item} />}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Item In The Cart</Text>
          </View>
        }
      />
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <View style={styles.flexContainer}>
            <View>
              <Text style={styles.text}>Total Price:</Text>
            </View>
            <View>
              <Text style={styles.priceText}>${calculateTotalPrice()}</Text>
            </View>
          </View>
          <View>
            <Button
              title={'Checkout'}
              onClick={() => {
                Alert.alert('To Be Done');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    height: 90,
  },
  priceContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: '70%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  listContentContainer: {
    marginBottom: 200,
  },
  emptyContainer: {
    height: 300,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
     height: 10,
  }
});
