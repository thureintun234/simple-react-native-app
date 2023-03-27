import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';
import BottomNavigation from '../components/navigation/BottomNavigation';
import { useState } from 'react';
import ApplianceDetails from '../app/appliance/[id]';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='Main'
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name='ApplianceDetails'
        component={ApplianceDetails}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer independent={true}>
      {isLoggedIn ? (
        <MainNavigator />
      ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
