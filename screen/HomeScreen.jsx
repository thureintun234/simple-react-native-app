import React from 'react';
import { ScrollView } from 'react-native';
import { HomeCard, HomeChart, HomeDate } from '../components/home';

const HomeScreen = () => {
  return (
    <ScrollView>
      <HomeDate />
      <HomeChart />
      <HomeCard />
    </ScrollView>
  );
};

export default HomeScreen;
