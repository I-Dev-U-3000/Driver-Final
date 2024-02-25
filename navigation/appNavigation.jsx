import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from "../screens/GetStarted";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/Setting";
import AboutScreen from "../screens/About";
import PrivacypolicyScreen from "../screens/PrivacyPolicy";
import HelpCenterScreen from "../screens/HelpCenter";
import RateusScreen from "../screens/RateUs";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="GetStarted"
          options={{ headerShown: false }}
          component={GetStarted}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="profile"
          options={{ headerShown: false }}
          component={ProfileScreen}
        />
        <Stack.Screen
          name="setting"
          options={{ headerShown: false }}
          component={SettingScreen}
        />
        <Stack.Screen
          name="about"
          options={{ headerShown: false }}
          component={AboutScreen}
        />
        <Stack.Screen
          name="rateus"
          options={{ headerShown: false }}
          component={RateusScreen}
        />
        <Stack.Screen
          name="helpcenter"
          options={{ headerShown: false }}
          component={HelpCenterScreen}
        />
        <Stack.Screen
          name="privacypolicy"
          options={{ headerShown: false }}
          component={PrivacypolicyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
