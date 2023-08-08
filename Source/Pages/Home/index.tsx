import React from 'react';
import {View} from 'react-native';
import CardWrapper from '../../Components/CardWrapper';

const Home: React.FC = () => {
  return (
    <View testID='card-wrapper'>
      <CardWrapper />
    </View>
  );
};

export default Home;
