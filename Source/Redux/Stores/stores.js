import {createStore} from 'redux';
import AppReducer from '../Reducers/AppReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersistConfig = {
  key: 'CartApp',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const persistedReducer = persistReducer(PersistConfig, AppReducer);

const Stores = createStore(persistedReducer);
export const Persistor = persistStore(Stores);
export default Stores;
