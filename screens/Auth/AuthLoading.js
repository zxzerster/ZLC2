/**
 *
 * @format
 * @flow
 */

import React from 'react';
import {ActivityIndicator, Text} from 'react-native';

import {AppRoutes} from '../../AppRoutes'; 

type Props = {
  navigation: {
    navigate: Function,
  },
};

export default (props: Props) => {
  setTimeout(() => {
    props.navigation.navigate(AppRoutes.AuthStack.Login);
  }, 3000);
  return (
    <>
      <ActivityIndicator animating />
      <Text>AuthLoading</Text>
    </>
  );
};
