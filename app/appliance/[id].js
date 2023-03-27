import { useRoute } from '@react-navigation/native';
import {
  COLORS,
  SIZES,
  applianceData,
  applianceData as data,
} from '../../constants';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';

const ApplianceDetails = () => {
  const [activeMetric, setActiveMetric] = useState('Monthly Metrics');
  const route = useRoute();
  const navigation = useNavigation();
  const applianceId = route.params.id;
  const currentData = applianceData.find(
    (app) => app.id === Number(applianceId)
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate('Application')}
      >
        <MaterialIcons name='keyboard-backspace' size={28} color='black' />
        <Text style={styles.backTitle}>Appliance Info</Text>
      </TouchableOpacity>

      <View style={styles.appContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name={currentData?.iconName}
            size={32}
            color={COLORS.primary}
          />
        </View>
        <Text style={styles.appTitle}>{currentData?.title}</Text>
        <Text style={styles.appPrice}>$ {currentData?.price}</Text>
      </View>

      <View style={styles.infoContainer}>
        <FlatList
          data={['Monthly Metrics', '|   Weekly Metrics']}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setActiveMetric(item)}>
              <Text style={styles.infoTitle(item, activeMetric)}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        />

        <View style={styles.infoListContainer}>
          <Text style={styles.infoListName}>Average Comsumption</Text>
          <Text style={styles.infoListValue}>143.93 kWh</Text>
        </View>

        <View style={styles.infoListContainer}>
          <Text style={styles.infoListName}>Average Cost</Text>
          <Text style={styles.infoListValue}>SGD 45.01</Text>
        </View>

        <View style={styles.infoListContainer}>
          <Text style={styles.infoListName}>Average Carbon Footprint</Text>
          <Text style={styles.infoListValue}>58.39 kg</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 2 },
  backBtn: {
    margin: 10,
    flexDirection: 'row',
    alignContent: 'center',
  },
  backTitle: {
    fontSize: SIZES.large,
    marginLeft: 10,
    fontWeight: '500',
  },
  appContainer: {
    marginTop: 40,
    margin: 6,
    height: 140,
    shadowColor: '#171717',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 20,
    position: 'relative',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: 40,
    top: -30,
  },
  appTitle: {
    fontSize: SIZES.large,
  },
  appPrice: {
    fontSize: SIZES.xLarge,
    fontWeight: '600',
    marginTop: 10,
  },

  infoContainer: {
    margin: 6,
    minHeight: 140,
    shadowColor: '#171717',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 20,
  },
  infoTitle: (name, active) => ({
    fontSize: SIZES.large,
    fontWeight: '600',
    color: name === active ? COLORS.black : COLORS.gray,
    marginLeft: 6,
    marginBottom: 20,
  }),
  infoListContainer: {
    marginTop: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoListName: {
    fontSize: SIZES.medium,
    fontWeight: '400',
    color: COLORS.gray,
  },
  infoListValue: {
    fontSize: SIZES.medium,
    fontWeight: '500',
  },
});

export default ApplianceDetails;
