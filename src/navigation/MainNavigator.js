import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createStackNavigator();
const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: 'Home',
        headerStyle: {
          backgroundColor: '#fff',
          borderColor: '#fff',
          shadowColor: 'transparent',
          elevation: 1,
        },
        cardStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
