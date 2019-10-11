/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MainTabs from './screens/MainTabs';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Tabs = createStackNavigator(
  {
    MainTabs: {screen: MainTabs},
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(Tabs);
