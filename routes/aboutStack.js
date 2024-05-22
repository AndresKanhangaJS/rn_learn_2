import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from '../shared/header'

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="About" 
        component={About} 
        options={{ 
          headerTitle: () => <Header title='About GameZone'/>
        }}
      />
    </Stack.Navigator>
  );
}

export default AboutStack;
