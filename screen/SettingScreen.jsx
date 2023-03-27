import React from 'react';
import { Text, View } from 'react-native';
import { SIZES } from '../constants';

const SettingScreen = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 40,
          fontSize: SIZES.xLarge,
          fontWeight: '600',
        }}
      >
        Settings
      </Text>
    </View>
  );
};

export default SettingScreen;
