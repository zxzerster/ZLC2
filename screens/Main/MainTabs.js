/**
 *
 * @format
 * @flow
 */

import {createBottomTabNavigator} from 'react-navigation-tabs';

import Tab1Screen from './Tab1';
import Tab2Screen from './Tab2';

const MainTabs = createBottomTabNavigator(
  {
    Tab1: {screen: Tab1Screen},
    Tab2: {screen: Tab2Screen},
  },
  {initialRouteName: 'Tab1'},
);

export default MainTabs;
