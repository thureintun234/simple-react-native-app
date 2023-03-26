import React from 'react';
import { Text, View } from 'react-native';

import styles from './homeCard.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../../constants';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: SIZES.medium }}>Your consumption data</Text>
          <TouchableOpacity style={styles.btn}>
            <MaterialCommunityIcons
              name='lightning-bolt'
              size={24}
              color={COLORS.white}
            />
            <Text style={styles.btnText}>8.35 kWh</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.money}>
          <FontAwesome name='dollar' size={24} color={COLORS.gray} />
          <Text style={styles.moneyText}>2.61 SGD</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: SIZES.medium }}>
            Comparison to the similar Condo minium household in NEA study
          </Text>
          <Text style={styles.diffText}>Difference: - 20.63%</Text>
        </View>
      </View>
    </>
  );
};

export default HomeCard;
