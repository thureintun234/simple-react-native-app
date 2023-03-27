import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Zocial } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { COLORS } from '../../constants';

import styles from './loginForm.style';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('123');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    onLogin(email, password);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>RESYNC</Text>
      </View>

      <View>
        <Text style={styles.name}>Smart Home</Text>
      </View>

      <View style={styles.textContainer}>
        <Zocial name='email' size={24} color='black' style={styles.textIcon} />
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
        />
      </View>

      <View style={styles.textContainer}>
        <MaterialIcons
          name='lock'
          size={24}
          color='black'
          style={styles.textIcon}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword ? false : true}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.textIconBtn}
          onPress={toggleShowPassword}
        >
          <Fontisto
            name='eye'
            size={18}
            color='black'
            style={styles.textIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxWrapper}>
        <Checkbox
          value={rememberMe}
          onValueChange={setRememberMe}
          style={styles.checkbox}
          color={COLORS.primary}
        />
        <Text style={styles.checkboxText}>Remember Me</Text>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 16 }}>
        <Text style={styles.checkboxText}>Forget password?</Text>
      </View>
    </View>
  );
};

export default LoginForm;
