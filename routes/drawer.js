import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
}

export default RootDrawerNavigator;
