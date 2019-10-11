/**
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, Button} from 'react-native';

class Login extends Component<{}> {
  render() {
    return (
      <>
        <Text>Login1</Text>
        <Button
          title="Go to main tabs"
          onPress={() => {
            this.props.navigation.navigate('MainTabs');
          }}
        />
        <Button
          title="Go to Login2"
          onPress={() => {
            this.props.navigation.navigate('Login2');
          }}
        />
      </>
    );
  }
}

export default Login;
