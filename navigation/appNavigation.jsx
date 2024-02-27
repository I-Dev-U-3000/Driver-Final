import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer,DarkTheme,DefaultTheme } from "@react-navigation/native";
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
import Guide from "../screens/Guide";
import theme from "../screens/theme/theme";
import themeContext from "../screens/theme/themeContext";
import { useState,useEffect } from 'react';
import { EventRegister } from 'react-native-event-listeners';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [darkMode,setDarkMode]=useState(false)

  useEffect(()=>{
    const listener=EventRegister.addEventListener('ChangeTheme',(data)=>{
      setDarkMode(data)
    })
    return ()=>{

    EventRegister.removeAllListeners(listener)
    }
  },[darkMode])
  return (
    <themeContext.Provider value={darkMode === true? theme.dark:theme.light}>
      <NavigationContainer theme={darkMode === true? DarkTheme : DefaultTheme}>
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
        <Stack.Screen
          name="Guide"
          options={{ headerShown: false }}
          component={Guide}
        />
      </Stack.Navigator>
      </NavigationContainer>
        </themeContext.Provider>
      );
}
