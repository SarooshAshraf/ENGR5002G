import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AddMetricScreen from '../screens/AddMetricScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen 
        name="Main" 
        component={DashboardScreen} 
        options={{ title: 'Dashboard' }} 
      />
      <Stack.Screen 
        name="AddMetric" 
        component={AddMetricScreen} 
        options={{ title: 'Add New Metric' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator; 