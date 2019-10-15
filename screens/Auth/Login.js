/**
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, Button} from 'react-native';

import {AppRoutes} from '../../AppRoutes';

type Props = {
  navigation: {
    navigate: Function,
  },
};

class Login extends Component<Props> {
  render() {
    return (
      <>
        <Text>Login1</Text>
        <Button
          title="Go to main tabs"
          onPress={() => {
            this.props.navigation.navigate(AppRoutes.MainTabs.Tab1);
          }}
        />
        <Button
          title="Go to Login2"
          onPress={() => {
            this.props.navigation.navigate(AppRoutes.AuthStack.Login2);
          }}
        />
      </>
    );
  }
}

export default Login;
