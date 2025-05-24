import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeTabs'>
            <Stack.Screen name='login' component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name='HomeTabs' component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name='signup' component={SignupScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator