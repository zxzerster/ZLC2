/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, Platform} from 'react-native';

import AppRoutes from './AppRoutes';

const App = () => {
  const content = <AppRoutes />;

  if (Platform.OS === 'ios') {
    return <SafeAreaView>{content}</SafeAreaView>;
  }

  return <>{content}</>;
};

export default App;
