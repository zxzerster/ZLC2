/**
 *
 * @format
 * @flow
 */

import React from 'react';
import {ActivityIndicator, Text} from 'react-native';

export default props => {
  setInterval(() => {
    props.navigation.navigate('AuthStack');
  }, 3000);
  return (
    <>
      <ActivityIndicator animating />
      <Text>AuthLoading</Text>
    </>
  );
};
