/**
 *
 * @format
 * @flow
 */

import React from 'react';
import {ActivityIndicator, Text} from 'react-native';

type Props = {
  navigation: {
    navigate: Function,
  },
};

export default (props: Props) => {
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
