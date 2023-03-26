import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';
import BottomNavigation from '../components/navigation/BottomNavigation';

const AuthStack = createNativeStackNavigator();
// const MainStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

// const MainNavigator = () => {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name='Home' component={BottomNavigation} />
//     </MainStack.Navigator>
//   );
// };

const AppNavigator = () => {
  const isLoggedIn = true; // replace with actual authentication check

  return (
    <NavigationContainer independent={true}>
      {isLoggedIn ? <BottomNavigation /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
