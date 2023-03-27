import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { applianceData as data } from '../../../constants';

import styles from './appliances.style';
import Card from '../../common/card/Card';

const Appliances = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Total Appliances: {data.length}</Text>

      {data?.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          iconName={item.iconName}
          title={item.title}
          price={item.price}
        />
      ))}
    </View>
  );
};

export default Appliances;
