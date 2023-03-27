import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import ChartDate from '../components/chart/date/ChartDate';
import ChartLayout from '../components/chart/chart/ChartLayout';

const ChartScreen = () => {
  return (
    <ScrollView>
      <ChartDate />
      <ChartLayout />
    </ScrollView>
  );
};

export default ChartScreen;
