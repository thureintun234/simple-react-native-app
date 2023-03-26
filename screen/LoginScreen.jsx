import React from 'react';
import { View } from 'react-native';

import { login } from '../utils/api';
import LoginForm from '../components/login/LoginForm';

const LoginScreen = ({ navigation, setIsLoggedIn }) => {
  const handleLogin = async (email, password) => {
    try {
      if (email === 'admin@gmail.com' && password === '123') {
        setIsLoggedIn(true);
      } else {
        throw new Error('Invalid email or password');
      }
      // navigation.navigate('Home');
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <View>
      <LoginForm onLogin={handleLogin} />
    </View>
  );
};

export default LoginScreen;
