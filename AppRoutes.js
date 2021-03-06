/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthLoadingScreen from './screens/Auth/AuthLoading';
import MainTabsScreen from './screens/Main/MainTabs';
import AuthStackScreen from './screens/Auth/AuthStack';

const container = createSwitchNavigator(
  {
    AuthLoading: {screen: AuthLoadingScreen},
    AuthStack: {screen: AuthStackScreen},
    MainTabs: {screen: MainTabsScreen},
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const routes = createAppContainer(container);

export const AppRoutes = {
  AuthLoading: 'AuthLoading',
  AuthStack: {
    Login: 'Login',
    Login2: 'Login2',
  },
  MainTabs: {
    Tab1: 'Tab1',
    Tab2: 'Tab2',
  },
};

export default routes;
