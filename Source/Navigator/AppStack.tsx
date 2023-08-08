import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationPaths} from './Constants/Index';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const AppStack: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName={NavigationPaths.HOME}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          alignSelf: 'center',
          color: '#2e3e43',
          fontWeight: '400',
        },
      }}>
      <Stack.Screen
        key={'Home'}
        name={NavigationPaths.HOME}
        component={Home}
        options={{
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(NavigationPaths.CART)}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../Assets/CartIcon.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen key={'Cart'} name={NavigationPaths.CART} component={Cart} />
    </Stack.Navigator>
  );
};
