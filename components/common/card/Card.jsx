import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './card.style';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../constants';
import { useNavigation } from 'expo-router';

const Card = ({ id, iconName, title, price }) => {
  const navitation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navitation.navigate('ApplianceDetails', { id })}
    >
      <View style={styles.logoContainer}>
        <MaterialIcons name={iconName} size={24} color={COLORS.primary} />
      </View>

      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
          <Text style={{ fontSize: SIZES.medium, fontWeight: '500' }}>
            {title}
          </Text>
          <Text style={{ color: COLORS.gray, fontSize: SIZES.small }}>
            {title}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: COLORS.primary,
              fontWeight: '500',
            }}
          >
            {price} SGD
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
