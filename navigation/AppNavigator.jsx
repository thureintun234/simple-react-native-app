import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';
import BottomNavigation from '../components/navigation/BottomNavigation';
import { useState } from 'react';

// const AuthStack = createNativeStackNavigator();
// const MainStack = createNativeStackNavigator();

// const AuthNavigator = () => {
//   return (
//     <AuthStack.Navigator>
//       <AuthStack.Screen name='Login' component={LoginScreen} />
//     </AuthStack.Navigator>
//   );
// };

// const MainNavigator = () => {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name='Home' component={BottomNavigation} />
//     </MainStack.Navigator>
//   );
// };

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer independent={true}>
      {isLoggedIn ? (
        <BottomNavigation />
      ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
