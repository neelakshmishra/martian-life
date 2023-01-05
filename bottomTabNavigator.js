import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/homeScreen';
import InfoScreen from '../screens/infoScreen';
import QandAScreen from '../screens/qAndaScreen';
import Register from '../screens/register';
import Photos from '../screens/photos';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

const Tabs = createMaterialBottomTabNavigator();
export default class BottomTab extends React.Component {
  render() {
    return (
      <Tabs.Navigator
        barStyle={styles.screens}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName;
            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Info') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            } else if (route.name === 'Photos') {
              iconName = focused ? 'images' : 'images-outline';
            } else if (route.name === 'Q_and_A') {
              iconName = focused ? 'document' : 'document-sharp';
            }
            return (
              <Ionicons name={iconName} color={color} size={RFValue(20)} />
            );
          },
        })}>
        <Tabs.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'home',
            tabBarColor: '#1A237E',
          }}
        />
        <Tabs.Screen
          name="Info"
          component={InfoScreen}
          options={{
            tabBarLabel: 'info',
            tabBarColor: '#283593',
          }}
        />
        <Tabs.Screen
          name="Photos"
          component={Photos}
          options={{
            tabBarLabel: 'Photos',
            tabBarColor: '#2f4f4f',
          }}
        />
        <Tabs.Screen
          name="Q_and_A"
          component={QandAScreen}
          options={{
            tabBarLabel: 'Q And A',
            tabBarColor: '#4B8378',
          }}
        />
      </Tabs.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  screens: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
});

//tabBarOptions={{showLabel:false,style:{position:}}}
