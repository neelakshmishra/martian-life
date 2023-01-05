import * as React from 'react';
import { View, Text } from 'react-native';
import BottomTab from './Navigation/bottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/login';
import Register from './screens/register';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/profileScreen';

const Stag = createStackNavigator();
const StackNav = () => {
  return (
    <Stag.Navigator screenOptions={{ headerShown: false }}>
      <Stag.Screen name="Register" component={Register} />
      <Stag.Screen name="login" component={LoginScreen} />
      <Stag.Screen name="BottomTab" component={BottomTab} />
      <Stag.Screen name="Profile" component={ProfileScreen} />
    </Stag.Navigator>
  );
};
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    );
  }
}
