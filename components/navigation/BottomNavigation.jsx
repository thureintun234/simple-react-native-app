import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import ApplicationScreen from '../../screen/ApplicationScreen';
import ChartScreen from '../../screen/ChartScreen';
import SettingScreen from '../../screen/SettingScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { COLORS } from '../../constants';
import styles from './bottomNavigation.style';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Chart') {
            iconName = focused
              ? 'insert-chart-outlined'
              : 'insert-chart-outlined';
          } else if (route.name === 'Application') {
            iconName = focused ? 'deck' : 'deck';
          } else {
            iconName = focused ? 'settings' : 'settings';
          }

          return (
            <MaterialIcons
              name={iconName}
              size={size}
              color={color}
              style={styles.icon(focused)}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.black,
        inactiveTintColor: COLORS.gray,
      }}
      initialRouteName='Home'
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Application'
        component={ApplicationScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Chart'
        component={ChartScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='Setting'
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
