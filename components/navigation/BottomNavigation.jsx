import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import ApplicationScreen from '../../screen/ApplicationScreen';
import ChartScreen from '../../screen/ChartScreen';
import SettingScreen from '../../screen/SettingScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Application' component={ApplicationScreen} />
      <Tab.Screen name='Chart' component={ChartScreen} />
      <Tab.Screen name='Setting' component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
