import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <NavigationContainer>
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
            title: 'About Game Zone'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AboutStack;
