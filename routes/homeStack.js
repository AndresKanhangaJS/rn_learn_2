import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home" 
        component={Home} 
        options={{ 
          headerTitle: () => <Header title='GameZone'/>
        }}
      />
      <Stack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails}
        options={{ 
          title: 'Review Details'
        }} 
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
