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
    // eslint-disable-next-line react-native/no-inline-styles
    return <SafeAreaView style={{flex: 1}}>{content}</SafeAreaView>;
  }

  return <>{content}</>;
};

export default App;
