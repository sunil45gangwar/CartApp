import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { fetchData } from '../../Network';
import Card from '../Card';
import styles from './CardWrapperStyle';

interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
}

const CardWrapper: React.FC = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    try {
      const response = await fetchData();
      setProductsData(response);
    } catch (error) {
      console.error('Error fetching products data:', error);
    }
  };

  return (
    <View>
      <FlatList
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="always"
        data={productsData}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
      />
    </View>
  );
};

export default CardWrapper;
