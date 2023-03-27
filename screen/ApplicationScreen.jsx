import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { COLORS } from '../constants';
import ApplicationDate from '../components/application/date/ApplicationDate';
import Appliances from '../components/application/appliances/Appliances';

const ApplicationScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.backColor,
        width: '100%',
        height: '100%',
      }}
    >
      <ApplicationDate />
      <Appliances />
    </ScrollView>
  );
};

export default ApplicationScreen;
