/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import AppContainer  from './Source/Navigator/AppContainer';
import { Provider  as StoreProvider} from 'react-redux';
import Stores, { Persistor } from './Source/Redux/Stores/stores';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
   <StoreProvider store={Stores}>
      <PersistGate loading={null} persistor={Persistor}>
          <AppContainer />
      </PersistGate>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
