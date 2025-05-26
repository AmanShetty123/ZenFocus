import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import SignupScreen from "../screens/SignupScreen";
import CreateRoom from "../screens/CreateRoom";
import PomodoroScreen from "../screens/PomodoroScreen";
import { useDispatch } from "react-redux";
import { initAuth } from "../auth/auth";
const Stack = createStackNavigator();
const AppNavigator = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    initAuth(dispatch, navigation);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createRoom"
          component={CreateRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pomodoroRoom"
          component={PomodoroScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
