/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Playground from './network/Playground';

import AppRoutes from './AppRoutes';

const App = () => {
  Playground();

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
