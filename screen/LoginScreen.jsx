import React from 'react';
import { View } from 'react-native';

import { login } from '../utils/api';
import LoginForm from '../components/login/LoginForm';

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      navigation.navigate('Home');
    } catch (error) {
      // Handle login error
      console.log(error);
    }
  };

  return (
    <View>
      <LoginForm onLogin={handleLogin} />
    </View>
  );
};

export default LoginScreen;
