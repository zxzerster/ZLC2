/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './Login';
import Login2Screen from './Login2';

const AuthStack = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Login2: {screen: Login2Screen},
  },
  {initialRouteName: 'Login'},
);

export default AuthStack;
