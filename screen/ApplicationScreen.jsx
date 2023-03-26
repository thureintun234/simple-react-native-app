import React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../constants';

const ApplicationScreen = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.backColor,
        width: '100%',
        height: '100%',
      }}
    >
      <Text>ApplicationScreen</Text>
    </View>
  );
};

export default ApplicationScreen;
